# Docker Container Vulnerabilities Guide

This document outlines the intentional vulnerabilities in the Docker setup for educational purposes and how to mitigate them.

## 🚨 Current Vulnerabilities in Dockerfile

### 1. **Running as Root User (HIGH RISK)**

**Vulnerability:**
```dockerfile
# These lines are commented out - meaning we run as root!
# RUN addgroup app && adduser -S -G app app
# USER app
```

**Risk:** Container runs with root privileges, allowing potential container escape and host system compromise.

**Exploitation:** If an attacker gains code execution, they have root access within the container.

### 2. **Using Development Server in Production (MEDIUM RISK)**

**Vulnerability:**
```dockerfile
CMD npm run dev
```

**Risk:** Vite dev server is not hardened for production and may expose debugging information.

**Exploitation:** Development servers often have verbose error messages and debugging endpoints.

### 3. **Broad Port Exposure (LOW-MEDIUM RISK)**

**Vulnerability:**
```dockerfile
EXPOSE 5173
# Vite dev server with --host flag exposes to all interfaces
```

**Risk:** Application accessible from any network interface.

### 4. **No Resource Limits (MEDIUM RISK)**

**Vulnerability:** No CPU/memory limits defined.

**Risk:** Container can consume all host resources (DoS).

### 5. **Copying Sensitive Files (MEDIUM RISK)**

**Vulnerability:**
```dockerfile
COPY . .
```

**Risk:** Copies everything including potentially sensitive files (.env, .git, etc.).

### 6. **Using Latest/Unspecific Tags (LOW RISK)**

**Risk:** Base image could change unexpectedly, introducing vulnerabilities.

### 7. **No Health Checks (LOW RISK)**

**Risk:** No way to verify container health, potentially running broken services.

## 🔧 Mitigation Strategies

### 1. **Secure Dockerfile Example**

Create `Dockerfile.secure`:

```dockerfile
# Use specific version with minimal attack surface
FROM node:20-alpine3.18

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies as root, then switch user
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source code with proper ownership
COPY --chown=nextjs:nodejs . .

# Switch to non-root user
USER nextjs

# Build the application
RUN npm run build

# Expose only necessary port
EXPOSE 3000

# Use production server
CMD ["npm", "run", "preview"]

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1
```

### 2. **Docker Compose Security**

Create `docker-compose.secure.yml`:

```yaml
version: '3.8'
services:
  weather-app:
    build: 
      context: .
      dockerfile: Dockerfile.secure
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    
    # Security configurations
    security_opt:
      - no-new-privileges:true
    
    # Resource limits
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          memory: 256M
    
    # Read-only root filesystem
    read_only: true
    
    # Temporary filesystem for writable areas
    tmpfs:
      - /tmp:noexec,nosuid,size=100m
    
    # Drop capabilities
    cap_drop:
      - ALL
    cap_add:
      - CHOWN
      - SETGID
      - SETUID
    
    # Network security
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
    internal: false
```

### 3. **Container Security Best Practices**

#### A. Use .dockerignore
```
node_modules
npm-debug.log
.git
.env
.env.local
README.md
Dockerfile
.dockerignore
```

#### B. Multi-stage Build (Advanced)
```dockerfile
# Build stage
FROM node:20-alpine3.18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:20-alpine3.18 AS production
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .
USER nextjs
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

#### C. Security Scanning Commands
```bash
# Scan for vulnerabilities
docker scout cves vuln-weather-app
docker scout recommendations vuln-weather-app

# Use Trivy for scanning
trivy image vuln-weather-app
```

### 4. **Runtime Security**

#### A. Run with security flags:
```bash
docker run -p 3000:3000 \
  --read-only \
  --tmpfs /tmp:noexec,nosuid,size=100m \
  --security-opt=no-new-privileges:true \
  --cap-drop=ALL \
  --user 1001:1001 \
  vuln-weather-app
```

#### B. Network isolation:
```bash
# Create isolated network
docker network create --driver bridge app-network

# Run container in isolated network
docker run --network app-network vuln-weather-app
```

## 🎯 Hackathon Demonstration Ideas

### For Penetration Testing:

1. **Container Escape Demo:**
   - Show how root access in container can be exploited
   - Demonstrate volume mount attacks

2. **Resource Exhaustion:**
   - Create CPU/memory bombs in the vulnerable version
   - Show how limits prevent this

3. **Secrets Exposure:**
   - Place fake secrets in the image
   - Show how they can be extracted

4. **Network Attacks:**
   - Demonstrate lateral movement from compromised container
   - Show network segmentation benefits

### For Blue Team Defense:

1. **Monitoring and Logging:**
   - Set up container monitoring
   - Show suspicious activity detection

2. **Image Scanning Integration:**
   - Integrate security scanning in CI/CD
   - Show vulnerability reporting

3. **Runtime Protection:**
   - Demonstrate runtime security tools
   - Show anomaly detection

## 🏃‍♂️ Quick Implementation

To implement these vulnerabilities and mitigations in your hackathon:

1. Keep current `Dockerfile` as the vulnerable version
2. Create `Dockerfile.secure` with mitigations
3. Create comparison demos showing the differences
4. Document the security implications for judges

This approach will showcase both offensive and defensive security knowledge!
