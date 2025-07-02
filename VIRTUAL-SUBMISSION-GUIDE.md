# Virtual Hackathon Submission Guide 💻

**Remote Docker Security Challenge - How to Submit Your Solution**

## 🌐 Virtual Submission Process

Since this is a virtual hackathon, we'll use **file-based submissions** with **automated validation** and **optional video demos**.

### 📤 Submission Requirements

#### 1. Required Files

```
team-[NUMBER]-submission/
├── Dockerfile.secure              # Your secure Dockerfile
├── SOLUTION-REPORT.md             # Detailed findings and explanations
├── docker-compose.secure.yml      # Optional: secure compose configuration
├── README.md                      # How to build and run your solution
└── demo-video.mp4                 # Optional: 3-5 minute demo video
```

#### 2. Submission Method

Choose the method specified by your event organizers:

**Option A: GitHub Repository (Most Common)**

1. **Fork** the original repository to your GitHub account
2. **Clone** your fork: `git clone https://github.com/YOUR-USERNAME/vuln-weather-app.git`
3. **Create a new branch**: `git checkout -b team-[NUMBER]-solution`
4. **Add your solution files** to the repository
5. **Commit and push**:
   ```bash
   git add Dockerfile.secure SOLUTION-REPORT.md README.md
   git commit -m "Team [NUMBER] security solution"
   git push origin team-[NUMBER]-solution
   ```
6. **Share the repository link** in the submission form
7. **Create a Pull Request** (if requested by organizers)

**Option B: File Upload (Simple)**

1. **Download** the original repository as ZIP
2. **Extract** and work on your solution locally
3. **Create your solution** files
4. **Zip your complete solution** as `team-[NUMBER]-solution.zip`
5. **Upload** via the provided link: `[UPLOAD-LINK-FROM-ORGANIZER]`

**Option C: Cloud Drive (Team Collaboration)**

1. **Access the shared drive**: `[SHARED-DRIVE-LINK-FROM-ORGANIZER]`
2. **Create folder**: `team-[NUMBER]`
3. **Upload your solution files** to your team folder
4. **Notify organizers** via the communication channel

**Option D: Email Submission (Backup)**

1. **Create your solution** locally
2. **Zip all files** as `team-[NUMBER]-solution.zip`
3. **Email to**: `[ORGANIZER-EMAIL]`
4. **Subject**: "Docker Security Challenge - Team [NUMBER] Submission"

### 📋 Detailed File Requirements

#### Dockerfile.secure

Your main deliverable - the fixed, secure version of the Dockerfile.

**Must address these vulnerabilities:**

- ✅ Container should NOT run as root
- ✅ Should use production server (not development)
- ✅ Should implement security best practices

**Self-test before submission:**

```bash
# Critical test - MUST PASS
docker build -t my-solution -f Dockerfile.secure .
docker run --rm my-solution whoami
# Expected: NOT "root"

# Functionality test - MUST PASS
docker run -p 8080:5173 my-solution &
curl http://localhost:8080
# Expected: HTML response
```

#### SOLUTION-REPORT.md

**Template:**

````markdown
# Team [NUMBER] - Docker Security Challenge Solution

## Team Information

- **Team Name**:
- **Team Members**:
- **Submission Date**:

## 1. Vulnerabilities Discovered (30 points)

### Vulnerability 1: Root User Execution (HIGH RISK)

- **Location**: Dockerfile lines 4-5 (commented out)
- **Description**: Container runs as root user
- **Risk Level**: Critical
- **Potential Impact**: Container escape, privilege escalation
- **How to Exploit**: [Explain the attack scenario]

### Vulnerability 2: [Your finding]

- **Location**:
- **Description**:
- **Risk Level**:
- **Potential Impact**:
- **How to Exploit**:

[Continue for all vulnerabilities found...]

## 2. Security Fixes Implemented (35 points)

### Fix 1: Non-Root User Implementation

- **What Changed**: Added user creation and USER directive
- **Code Added**:
  ```dockerfile
  RUN addgroup -g 1001 -S nodejs && \
      adduser -S nextjs -u 1001 -G nodejs
  USER nextjs
  ```
````

- **Verification**: `docker run --rm my-solution whoami` returns `nextjs`
- **Why This Matters**: Follows principle of least privilege

### Fix 2: [Your next fix]

- **What Changed**:
- **Code Added**:
- **Verification**:
- **Why This Matters**:

[Continue for all fixes...]

## 3. Testing and Validation (10 points)

### Build Instructions

```bash
# Build the secure image
docker build -t team-[NUMBER]-secure -f Dockerfile.secure .

# Run the application
docker run -p 3000:5173 team-[NUMBER]-secure

# Access at: http://localhost:3000
```

### Security Verification

```bash
# Test 1: Verify non-root user
docker run --rm team-[NUMBER]-secure whoami
# Expected: nextjs (or your chosen non-root user)

# Test 2: Verify production server
docker run --rm team-[NUMBER]-secure ps aux | grep npm
# Expected: Shows "preview" not "dev"

# Test 3: Verify file ownership
docker run --rm team-[NUMBER]-secure ls -la /app | head -5
# Expected: Files owned by non-root user
```

## 4. Advanced Security Measures (Bonus - 10 points)

[Optional: Describe any additional security measures you implemented]

- Multi-stage builds
- Resource limits
- Health checks
- Security scanning
- etc.

## 5. Lessons Learned

[What did you learn about container security?]

## 6. References

[Any resources you used for research]

````

#### README.md
**Template:**
```markdown
# Team [NUMBER] Secure Weather App

## Quick Start
```bash
# Build and run the secure version
docker build -t secure-weather-app -f Dockerfile.secure .
docker run -p 3000:5173 secure-weather-app

# Access the app at http://localhost:3000
````

## What We Fixed

- 🔒 Container no longer runs as root
- 🏭 Uses production server instead of development
- 🛡️ Implements security best practices
- [Add your other fixes]

## Verification

Run these commands to verify our security fixes:
[Include your test commands]

## Team

- [Team member names and roles]

```

### 🎥 Optional: Demo Video (Bonus Points)

**If you want to create a demo video (3-5 minutes):**

1. **Screen recording** showing:
   - Your vulnerability discovery process
   - Building and running your secure solution
   - Demonstrating the security improvements
   - Explaining your approach

2. **Upload to** YouTube/Vimeo/Drive and include link in README.md

3. **Bonus points** for clear explanation and demonstration

### 🕐 Submission Timeline

```

Challenge Start: [START-TIME]
Submission Deadline: [DEADLINE-TIME]
Results Announced: [RESULTS-TIME]

```

**Late submissions will not be accepted!**

### ✅ Pre-Submission Checklist

Before submitting, verify:

- [ ] **Build test**: `docker build -f Dockerfile.secure .` succeeds
- [ ] **Root test**: `docker run --rm [image] whoami` ≠ "root"
- [ ] **App test**: Application starts and serves content
- [ ] **Files included**: All required files in submission
- [ ] **Documentation**: SOLUTION-REPORT.md is complete
- [ ] **Team info**: Names and contact details provided

### 🚨 Common Mistakes to Avoid

**Technical Issues:**
- ❌ Solution still runs as root
- ❌ Application doesn't start or work
- ❌ Missing required files
- ❌ Dockerfile doesn't build

**Documentation Issues:**
- ❌ No explanation of vulnerabilities found
- ❌ No verification commands provided
- ❌ Missing team information
- ❌ Copy-paste without understanding

### 📞 Support During Virtual Event

**Need help?**
- **Discord/Slack**: `#technical-support` channel
- **Email**: `[ORGANIZER-EMAIL]`
- **Office Hours**: `[VIDEO-CALL-LINK]` at `[TIMES]`

**Common questions:**
- Can't build Docker image → Check Docker installation
- Don't understand a vulnerability → Ask in help channel
- Submission format unclear → Check this guide again

### 🏆 Judging Process

1. **Automated validation** of all submissions using our testing script
2. **Manual review** of documentation and approaches
3. **Video demos** reviewed for bonus points
4. **Results announced** in virtual ceremony

**Scoring breakdown:**
- Automated tests: 63 points
- Documentation: 25 points
- Advanced features: 10 points
- Video demo: 2 bonus points

---

**Good luck, and remember: Security is about understanding, not just fixing!** 🔐

**Submission Links:**
- GitHub Template: `[GITHUB-LINK]`
- File Upload: `[UPLOAD-LINK]`
- Shared Drive: `[DRIVE-LINK]`
- Help Channel: `[DISCORD/SLACK-LINK]`
```
