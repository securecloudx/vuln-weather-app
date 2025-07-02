# 🛡️ Code-to-Cloud Security Challenge - Multi-Layer Guide

**A comprehensive security challenge covering Frontend → Backend → Container → Cloud → CI/CD**

## 🎯 Challenge Overview

This weather app contains **intentional vulnerabilities** across the entire development lifecycle:

### 🔍 Vulnerability Layers (Total: ~20 security issues)

| Layer                   | Vulnerabilities                                   | Risk Level | Points |
| ----------------------- | ------------------------------------------------- | ---------- | ------ |
| **🌐 Frontend Code**    | Client-side auth bypass, XSS, insecure storage    | HIGH       | 25     |
| **🔒 Authentication**   | Hardcoded credentials, weak tokens, no validation | CRITICAL   | 30     |
| **📡 API Security**     | Exposed API keys, CORS issues, no rate limiting   | HIGH       | 20     |
| **🐳 Container**        | Root user, dev server, missing security configs   | HIGH       | 15     |
| **☁️ Cloud Deployment** | Public access, no HTTPS, weak IAM                 | MEDIUM     | 10     |
| **🔄 CI/CD Pipeline**   | Secret exposure, insecure builds, no scanning     | MEDIUM     | 10     |

**Total: 110 points** (allows for bonus points)

---

## 🎯 Track 1: Frontend Security (25 points)

### Vulnerabilities to Find:

#### 1. Client-Side Authentication Bypass (10 points)

**Location**: `src/pages/Home.jsx` lines 15-17

```javascript
// localStorage.setItem('token', 'bypassed-token')
// localStorage.setItem('user', 'attacker')
// window.location.href = '/dashboard'
```

**Exploit**: Uncomment these lines in browser DevTools
**Fix**: Move authentication to backend, validate tokens server-side

#### 2. Hardcoded Admin Credentials (8 points)

**Location**: `src/pages/Home.jsx` lines 31-34

```javascript
if (username === "admin" && password === "letmein") {
  localStorage.setItem("token", "admin-token");
}
```

**Exploit**: Login with `admin/letmein`
**Fix**: Remove hardcoded credentials, implement proper auth

#### 3. Insecure Token Storage (4 points)

**Location**: `src/pages/Dashboard.jsx` lines 8-12

```javascript
const token = localStorage.getItem("token");
```

**Issue**: Tokens stored in localStorage (XSS vulnerable)
**Fix**: Use httpOnly cookies or secure session management

#### 4. XSS via Username Display (3 points)

**Location**: `src/components/Weather.jsx` line 52

```javascript
<h2>welcome back, {username} 👋</h2>
```

**Exploit**: Set malicious username via localStorage
**Fix**: Sanitize user input, use proper escaping

---

## 🎯 Track 2: API Security (20 points)

### Vulnerabilities to Find:

#### 1. Exposed API Key (12 points)

**Location**: `src/components/Weather.jsx` line 14

```javascript
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
```

**Issue**: `VITE_` prefix makes it exposed to frontend
**Fix**: Move API calls to backend, secure API key server-side

#### 2. No Rate Limiting (4 points)

**Location**: Weather API calls
**Issue**: Unlimited API requests possible
**Fix**: Implement rate limiting, request throttling

#### 3. CORS Misconfiguration (4 points)

**Location**: API requests from frontend
**Issue**: Potential CORS bypass, credential exposure
**Fix**: Proper CORS policies, SameSite cookies

---

## 🎯 Track 3: Container Security (15 points)

### Vulnerabilities to Find:

#### 1. Root User Execution (6 points)

**Location**: `Dockerfile` (no USER directive)
**Issue**: Container runs as root
**Fix**: Create non-root user, use `USER` directive

#### 2. Development Server in Production (4 points)

**Location**: `Dockerfile` CMD using `npm run dev`
**Issue**: Development server exposes debug info
**Fix**: Use `npm run preview` for production

#### 3. Secrets in Image Layers (3 points)

**Location**: Build process copying all files
**Issue**: `.env` files, secrets in image layers
**Fix**: Multi-stage builds, proper `.dockerignore`

#### 4. No Resource Limits (2 points)

**Location**: Missing container constraints
**Issue**: Potential DoS attacks
**Fix**: Add memory/CPU limits

---

## 🎯 Track 4: Cloud Security (10 points)

### Vulnerabilities to Find:

#### 1. Public Container Access (4 points)

**Issue**: Container accessible without authentication
**Fix**: Implement proper ingress controls, WAF

#### 2. HTTP Only (No HTTPS) (3 points)

**Issue**: Traffic not encrypted
**Fix**: TLS termination, HTTPS enforcement

#### 3. Weak IAM Policies (3 points)

**Issue**: Overprivileged service accounts
**Fix**: Principle of least privilege, role-based access

---

## 🎯 Track 5: CI/CD Security (10 points)

### Vulnerabilities to Find:

#### 1. Secrets in Code (4 points)

**Issue**: API keys committed to repository
**Fix**: Secret management, environment variables

#### 2. Insecure Build Process (3 points)

**Issue**: No dependency scanning, vulnerable packages
**Fix**: Vulnerability scanning, SBOM generation

#### 3. No Container Scanning (3 points)

**Issue**: No security scanning of built images
**Fix**: Container security scanning, admission controllers

---

## 🏆 Skill Tracks & Point Tiers

### 🟢 Beginner Track (30-40 points)

**Focus**: Frontend + Basic Container Security

- Find client-side auth bypass
- Fix hardcoded credentials
- Implement non-root container user
- Basic documentation

### 🟡 Intermediate Track (50-70 points)

**Focus**: Full Stack Security

- All beginner items +
- Secure API key handling
- Production container config
- Basic cloud security measures
- Comprehensive testing

### 🔴 Advanced Track (80+ points)

**Focus**: Complete Code-to-Cloud Pipeline

- All intermediate items +
- CI/CD security implementation
- Advanced container security
- Cloud security controls
- Security automation

### 🚀 Ninja Track (90+ points)

**Focus**: Security Engineering

- All advanced items +
- Custom security tooling
- Zero-trust architecture
- Advanced threat modeling
- Security-as-code implementation

---

## 🧪 Testing Your Fixes

### Frontend Security Tests

```bash
# Test 1: Auth bypass resistance
# Try the localStorage bypass in DevTools
localStorage.setItem('token', 'fake-token')
# Should not grant access

# Test 2: XSS resistance
localStorage.setItem('user', '<script>alert("XSS")</script>')
# Should not execute script

# Test 3: Hardcoded credential removal
# Login with admin/letmein should fail
```

### API Security Tests

```bash
# Test 1: API key exposure
# Build production bundle and check for exposed keys
npm run build
grep -r "VITE_WEATHER_API_KEY" dist/

# Test 2: Rate limiting
# Multiple rapid requests should be throttled
```

### Container Security Tests

```bash
# Test 1: Non-root user
docker run --rm your-app whoami
# Should NOT return 'root'

# Test 2: Production server
docker run your-app ps aux | grep node
# Should show preview/production server, not dev
```

### Cloud Security Tests

```bash
# Test 1: HTTPS enforcement
curl -I http://your-app.com
# Should redirect to HTTPS

# Test 2: Security headers
curl -I https://your-app.com
# Should include security headers
```

---

## 📋 Submission Requirements

### Required Files:

1. **`SECURITY-REPORT.md`** - Comprehensive vulnerability analysis
2. **`fixes/`** directory with:
   - `frontend-secure/` - Fixed React code
   - `Dockerfile.secure` - Hardened container
   - `docker-compose.secure.yml` - Production deployment
   - `ci-cd-pipeline.yml` - Secure CI/CD config
3. **`README.md`** - How to deploy securely
4. **Demo video** (optional) - 5-minute security walkthrough

### Report Template:

```markdown
# Code-to-Cloud Security Analysis

## Executive Summary

- Total vulnerabilities found: X
- Risk levels: X Critical, X High, X Medium, X Low
- Estimated fix effort: X hours
- Business impact: [Description]

## Vulnerability Findings

### Layer 1: Frontend Security

[Your findings...]

### Layer 2: API Security

[Your findings...]

### Layer 3: Container Security

[Your findings...]

### Layer 4: Cloud Security

[Your findings...]

### Layer 5: CI/CD Security

[Your findings...]

## Implemented Fixes

[What you fixed and how...]

## Security Testing

[How you verified your fixes...]

## Recommendations

[Additional security measures...]
```

---

## 🎯 Where to Proceed Next

### Immediate Next Steps:

1. **📝 Update Challenge Documentation**

   - Enhance `PARTICIPANT-QUICK-START.md` with multi-layer options
   - Create skill-specific guides (Beginner/Intermediate/Advanced/Ninja)
   - Update scoring rubric for 110-point system

2. **🔧 Create Reference Solutions**

   - Build complete fixed versions for each layer
   - Create automated testing scripts for validation
   - Document step-by-step remediation guides

3. **🏗️ Add Infrastructure Examples**

   - Kubernetes deployment manifests
   - Terraform/CloudFormation templates
   - CI/CD pipeline examples (GitHub Actions, GitLab CI)

4. **🧪 Build Automated Validation**
   - Security scanning integration
   - Automated penetration testing
   - Compliance checking

### Recommended Implementation Order:

#### Phase 1: Enhanced Core Challenge (Week 1)

```bash
# Create multi-tier difficulty levels
cp PARTICIPANT-QUICK-START.md BEGINNER-TRACK.md
# Add intermediate/advanced tracks
# Update validation scripts for new scoring
```

#### Phase 2: Full Stack Security (Week 2)

```bash
# Add backend API component (optional)
# Create cloud deployment examples
# Build CI/CD security templates
```

#### Phase 3: Automation & Tooling (Week 3)

```bash
# Automated security scanning
# Integration with security tools
# Real-time vulnerability detection
```

Would you like me to start with any specific phase? I'd recommend **Phase 1** - creating the enhanced multi-tier challenge structure with the new 110-point scoring system and skill tracks.

This approach gives you:

- ✅ **Scalable difficulty** (beginners can focus on frontend, experts handle full pipeline)
- ✅ **Real-world relevance** (covers actual security engineering workflows)
- ✅ **Educational value** (teaches comprehensive security thinking)
- ✅ **Industry alignment** (matches current DevSecOps practices)

What specific area would you like me to develop first?
