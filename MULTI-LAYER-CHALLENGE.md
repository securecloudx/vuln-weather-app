# 🎯 Multi-Layer Security Challenge - Choose Your Track

**Code-to-Cloud Security Challenge with skill-based difficulty levels**

## 🏁 Quick Start - Pick Your Experience Level

### 🟢 **New to Security?** → Beginner Track (30-40 points)

**Time**: 1-2 hours | **Focus**: Frontend + Basic Container

- Find authentication bypass vulnerabilities
- Fix hardcoded credentials
- Make container run as non-root user
- Document your findings

### 🟡 **Some Security Experience?** → Intermediate Track (50-70 points)

**Time**: 2-4 hours | **Focus**: Full Stack Security

- Everything in Beginner Track +
- Secure API key management
- Production container configuration
- Basic cloud security measures

### 🔴 **Security Professional?** → Advanced Track (80+ points)

**Time**: 4-8 hours | **Focus**: Complete DevSecOps Pipeline

- Everything in Intermediate Track +
- CI/CD security implementation
- Advanced container hardening
- Cloud security controls

### 🚀 **Security Engineer/Ninja?** → Expert Track (90+ points)

**Time**: 8+ hours | **Focus**: Security Engineering

- Everything in Advanced Track +
- Custom security tooling
- Zero-trust architecture design
- Advanced threat modeling

---

## 🟢 Beginner Track - Start Here (30-40 points)

### Your Mission

Find and fix the **most critical** security vulnerabilities that could immediately compromise the application.

### Step 1: Test the Current App (5 minutes)

```bash
# 1. Build and run the app
docker build -t vuln-weather-app .
docker run -p 5173:5173 vuln-weather-app

# 2. Visit http://localhost:5173
# 3. Try logging in with any username/password
```

### Step 2: Find the Authentication Bypass (10 minutes)

**Hint**: Open browser DevTools (F12) and try these commands in the Console:

```javascript
localStorage.setItem("token", "bypassed-token");
localStorage.setItem("user", "hacker");
window.location.href = "/dashboard";
```

**What happened?** You bypassed authentication completely! 🚨

### Step 3: Find Hardcoded Credentials (5 minutes)

Look in the source code for hardcoded username/password combinations.
**Hint**: Check `src/pages/Home.jsx` around line 31.

### Step 4: Fix the Container Security (15 minutes)

```bash
# Test current container security
docker run --rm vuln-weather-app whoami
```

**If it says "root" - that's a major security issue!**

**Your fixes should make these tests pass:**

```bash
# After your fixes:
docker build -t secure-app -f Dockerfile.secure .
docker run --rm secure-app whoami  # Should NOT be root
docker run -p 8080:5173 -d secure-app  # Should still work
curl http://localhost:8080  # Should return HTML
```

### Step 5: Document Your Findings (15 minutes)

Create `SECURITY-REPORT.md`:

```markdown
# Security Vulnerabilities Found

## 1. Authentication Bypass (Critical)

- **Issue**: Client-side authentication can be bypassed
- **Location**: Browser localStorage
- **Impact**: Anyone can access the dashboard
- **Fix**: [Describe your fix]

## 2. Hardcoded Credentials (High)

- **Issue**: Admin credentials in source code
- **Location**: src/pages/Home.jsx line 31
- **Impact**: Default admin access
- **Fix**: [Describe your fix]

## 3. Container Running as Root (High)

- **Issue**: Container has unnecessary privileges
- **Location**: Dockerfile missing USER directive
- **Impact**: Container escape potential
- **Fix**: [Describe your fix]

## Testing

[How you verified your fixes work]
```

### Beginner Success Criteria ✅

- [ ] Container doesn't run as root
- [ ] Found authentication bypass vulnerability
- [ ] Found hardcoded credentials
- [ ] App still works after fixes
- [ ] Clear documentation of findings

---

## 🟡 Intermediate Track (50-70 points)

### Everything from Beginner Track +

### Step 6: API Security Issues (20 minutes)

Look for these vulnerabilities:

**Exposed API Keys:**

```bash
# Build production version and check for secrets
npm run build
grep -r "VITE_" dist/
```

**Issue**: API keys exposed to frontend users

**No Rate Limiting:**
Try making rapid API requests - notice anything?

### Step 7: Advanced Container Security (20 minutes)

Beyond just non-root user:

- Multi-stage builds to reduce attack surface
- Resource limits to prevent DoS
- Health checks for monitoring
- Proper file permissions

### Step 8: Production Deployment (15 minutes)

Create `docker-compose.secure.yml` with:

- HTTPS enforcement
- Security headers
- Resource constraints
- Monitoring setup

### Intermediate Success Criteria ✅

- [ ] All beginner criteria +
- [ ] API keys secured (not exposed to frontend)
- [ ] Container has resource limits
- [ ] Production-ready deployment configuration
- [ ] Security headers implemented

---

## 🔴 Advanced Track (80+ points)

### Everything from Intermediate Track +

### Step 9: CI/CD Security (30 minutes)

Create `.github/workflows/security.yml`:

- Dependency vulnerability scanning
- Container security scanning
- SAST (Static Application Security Testing)
- Secret detection in commits

### Step 10: Cloud Security Controls (25 minutes)

Implement:

- IAM roles with least privilege
- Network security groups
- WAF (Web Application Firewall)
- Monitoring and alerting

### Step 11: Advanced Threat Modeling (20 minutes)

Document:

- Attack surface analysis
- Threat vectors and mitigations
- Risk assessment matrix
- Security controls effectiveness

### Advanced Success Criteria ✅

- [ ] All intermediate criteria +
- [ ] Automated security scanning in CI/CD
- [ ] Cloud security controls implemented
- [ ] Comprehensive threat model documented
- [ ] Zero-trust security architecture

---

## 🚀 Expert/Ninja Track (90+ points)

### Everything from Advanced Track +

### Step 12: Custom Security Tooling (45 minutes)

Build custom security tools:

- Security testing automation
- Custom vulnerability scanners
- Policy-as-code implementation
- Security metrics dashboard

### Step 13: Zero-Trust Implementation (30 minutes)

- Service mesh security
- Certificate management
- Identity verification at every layer
- Microsegmentation

### Step 14: Advanced Monitoring (30 minutes)

- SIEM integration
- Anomaly detection
- Incident response automation
- Security chaos engineering

---

## 🧪 Self-Testing Your Solutions

### Quick Security Tests

```bash
# Test 1: Authentication Bypass Resistance
# Your fix should prevent DevTools bypass

# Test 2: Container Security
docker run --rm your-secure-app whoami
# Should NOT return 'root'

# Test 3: API Key Security
npm run build && grep -r "VITE_WEATHER_API_KEY" dist/
# Should find no exposed keys

# Test 4: Production Server
docker run your-secure-app ps aux | grep node
# Should show production server, not dev mode
```

### Security Checklist by Track

#### 🟢 Beginner Checklist

- [ ] Authentication bypass fixed
- [ ] Hardcoded credentials removed
- [ ] Container runs as non-root
- [ ] Basic documentation provided

#### 🟡 Intermediate Checklist

- [ ] All beginner items +
- [ ] API keys secured
- [ ] Resource limits applied
- [ ] Production configuration created

#### 🔴 Advanced Checklist

- [ ] All intermediate items +
- [ ] CI/CD security implemented
- [ ] Cloud controls configured
- [ ] Threat model documented

#### 🚀 Expert Checklist

- [ ] All advanced items +
- [ ] Custom tooling created
- [ ] Zero-trust architecture
- [ ] Advanced monitoring setup

---

## 📋 What to Submit

### All Tracks:

1. **SECURITY-REPORT.md** - Your vulnerability findings
2. **Dockerfile.secure** - Your hardened container
3. **README.md** - How to run your secure version

### Intermediate+ Tracks:

4. **docker-compose.secure.yml** - Production deployment
5. **fixes/** directory with all corrected code

### Advanced+ Tracks:

6. **ci-cd-security.yml** - Secure pipeline configuration
7. **cloud-security.md** - Cloud security controls
8. **threat-model.md** - Security analysis

### Expert Track:

9. **custom-tools/** - Your security automation
10. **architecture.md** - Zero-trust design
11. **Demo video** - 10-minute security walkthrough

---

## 🆘 Need Help?

### Getting Stuck? Progressive Hints:

#### Authentication Issues:

1. **Gentle**: "How does the app know you're logged in?"
2. **Medium**: "Check what happens in localStorage"
3. **Direct**: "Look for hardcoded username/password combinations"

#### Container Issues:

1. **Gentle**: "Who is running the processes inside the container?"
2. **Medium**: "Look up Docker USER directive"
3. **Direct**: "Add a non-root user to your Dockerfile"

#### API Issues:

1. **Gentle**: "Are any secrets visible to end users?"
2. **Medium**: "Check what VITE\_ prefix means in environment variables"
3. **Direct**: "API keys starting with VITE\_ are exposed to browsers"

### Time Management by Track:

- **🟢 Beginner**: 30-60 minutes for core fixes
- **🟡 Intermediate**: 2-4 hours for comprehensive fixes
- **🔴 Advanced**: 4-8 hours for full pipeline security
- **🚀 Expert**: 8+ hours for custom security engineering

**Remember**: You can always start with Beginner track and level up as you progress! 🎯
