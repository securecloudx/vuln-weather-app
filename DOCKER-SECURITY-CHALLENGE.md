# Docker Security Challenge 🔐

Welcome to the Docker Security Challenge! This vulnerable weather application contains multiple Docker security vulnerabilities that you need to discover and fix.

## 🎯 Challenge Overview

Your mission is to:
1. **Identify** security vulnerabilities in the Docker configuration
2. **Understand** the potential impact of each vulnerability
3. **Implement** proper security mitigations
4. **Document** your findings and solutions

## 🕵️ Investigation Phase

### Step 1: Analyze the Current Setup

Examine these files carefully:
- `Dockerfile` - The main container configuration
- `package.json` - Application dependencies and scripts
- `.dockerignore` - Files excluded from the Docker build

**Questions to ask yourself:**
- Who is running the application inside the container?
- What files are being copied into the container?
- How is the application being started?
- What ports are exposed and how?

### Step 2: Build and Test

```bash
# Build the application
docker build -t vuln-weather-app .

# Run basic tests
docker run --rm vuln-weather-app whoami
docker run --rm vuln-weather-app ps aux
docker run --rm vuln-weather-app ls -la /
```

**What do you notice from these commands?**

### Step 3: Security Assessment

Use these commands to gather information:

```bash
# Check running processes
docker run --rm vuln-weather-app ps aux

# Check user permissions
docker run --rm vuln-weather-app id

# Check file permissions
docker run --rm vuln-weather-app ls -la /app

# Check network configuration
docker run --rm vuln-weather-app netstat -tlnp

# Check what's in the container
docker run --rm vuln-weather-app find /app -type f -name ".*" | head -20
```

## 🚨 Vulnerability Categories to Investigate

### Category 1: User and Permissions 👤
**Hints:**
- Check what user the container runs as
- Consider the principle of least privilege
- Look for commented-out security configurations

**Questions:**
- What are the risks of running as root?
- How can you create and use a non-privileged user?

### Category 2: Application Security 🔧
**Hints:**
- Examine how the application is started
- Consider the difference between development and production modes
- Think about information disclosure

**Questions:**
- Is this suitable for production deployment?
- What sensitive information might be exposed?

### Category 3: Resource Management 📊
**Hints:**
- No limits are currently set
- Consider DoS attack scenarios
- Think about container resource consumption

**Questions:**
- What happens if the container consumes too much memory/CPU?
- How can you prevent resource exhaustion attacks?

### Category 4: File System Security 📁
**Hints:**
- Look at what files are copied into the container
- Check the `.dockerignore` file
- Consider what sensitive data might be included

**Questions:**
- Are all copied files necessary?
- Could sensitive information be accidentally included?
- Should the container filesystem be read-only?

### Category 5: Network Security 🌐
**Hints:**
- Check how the application binds to network interfaces
- Consider the `--host` flag implications
- Think about network isolation

**Questions:**
- Is the application accessible from unexpected interfaces?
- How can you limit network exposure?

## 🛠️ Your Tasks

### Task 1: Vulnerability Report
Create a document listing:
- Each vulnerability you found
- The potential impact/risk level
- How it could be exploited

### Task 2: Secure Dockerfile
Create a `Dockerfile.secure` that addresses:
- [ ] User privileges
- [ ] Application security
- [ ] File system permissions
- [ ] Resource limits
- [ ] Network security

### Task 3: Security Testing
Write commands to verify your mitigations work:
- [ ] Verify non-root user
- [ ] Test resource limits
- [ ] Confirm read-only filesystem (if implemented)
- [ ] Validate network restrictions

### Task 4: Documentation
Document your changes:
- What you changed and why
- How to verify the security improvements
- Any trade-offs made

## 🔍 Testing Your Solutions

### Basic Security Checks
```bash
# Test user permissions
docker run --rm your-secure-image whoami

# Test file system access
docker run --rm your-secure-image touch /test.txt

# Test resource limits (you'll need to implement these)
docker run --rm --memory=100m your-secure-image [your-test-command]
```

### Advanced Testing
```bash
# Container escape attempts
docker run --rm your-secure-image ls /host 2>/dev/null || echo "Good: No host access"

# Privilege escalation tests
docker run --rm your-secure-image sudo -l 2>/dev/null || echo "Good: No sudo access"

# Network binding tests
docker run --rm -p 8080:5173 your-secure-image [check network bindings]
```

## 🏆 Bonus Challenges

### Bonus 1: Multi-stage Build
Can you optimize the image size and security using multi-stage builds?

### Bonus 2: Security Scanning
Integrate vulnerability scanning into your workflow:
```bash
# Try tools like:
# - docker scout (if available)
# - trivy
# - snyk
```

### Bonus 3: Runtime Security
Implement runtime security measures:
- Security profiles (AppArmor/SELinux)
- Capability dropping
- Seccomp profiles

### Bonus 4: Docker Compose Security
Create a secure `docker-compose.yml` with:
- Resource limits
- Network isolation
- Security options
- Health checks

## 📚 Research Resources

**Key Topics to Research:**
- Docker security best practices
- Container privilege escalation
- Docker capability system
- Container networking security
- Image layer security

**Useful Commands to Learn:**
- `docker inspect`
- `docker history`
- `docker diff`
- `docker exec`

## 🎯 Success Criteria

You've successfully completed the challenge when:
- [ ] You've identified at least 5 security vulnerabilities
- [ ] Your secure container runs as non-root
- [ ] You can demonstrate the security improvements
- [ ] You can explain the impact of each vulnerability
- [ ] Your solution follows security best practices

### 🎪 For Hackathon Participants

- ⏰ **Time Limit**: 3-4 hours recommended
- 🏆 **Scoring**: Based on vulnerabilities found and mitigations implemented
- 💡 **Hints Available**: Ask organizers if you're stuck
- 📝 **Documentation Required**: Document your findings and solutions

## 🚫 What NOT to Look At (Yet!)

Avoid these files until you've completed your analysis:
- `Dockerfile.secure` (if it exists)
- `DOCKER-VULNERABILITIES.md` (solutions document)
- `docker-compose.secure.yml` (secure configuration)

These contain the solutions - try to solve it yourself first!

---

**Good luck, and remember: The best way to learn security is by breaking things safely!** 🔐
