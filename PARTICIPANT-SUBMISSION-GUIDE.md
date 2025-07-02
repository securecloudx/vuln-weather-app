# Participant Submission Guide 📤

**72-Hour Virtual Docker Security Challenge - How to Submit Your Solution**

## ⏰ Event Details

- **Duration**: 72 hours (3 full days)
- **Format**: Work at your own pace, submit when ready
- **Deadline**: [INSERT DEADLINE DATE/TIME]
- **Validation**: Automated testing with immediate feedback

## 🎯 What You Need to Submit

### Required Files:

1. **Your secure Dockerfile** (name it `Dockerfile.secure`)
2. **Solution report** explaining your findings (`SOLUTION-REPORT.md`)
3. **README** with instructions to run your solution

### Optional Files:

- **Docker Compose file** (`docker-compose.secure.yml`)
- **Screenshots** showing before/after security improvements
- **Additional documentation** or scripts

## 📤 How to Submit (Choose One Method)

### Option A: Google Drive Upload (Recommended)

1. **Access your team folder**: [DRIVE-LINK]/team-[YOUR-NUMBER]/
2. **Upload your files** directly to your folder
3. **Validation runs automatically** within 10 minutes
4. **Check results** in the same folder (results.txt will appear)

### Option B: GitHub Repository

1. **Fork** the challenge repository
2. **Create branch** named `solution-[your-team-name]`
3. **Add your files** to the repository
4. **Create Pull Request** with title "Solution: [Team Name]"
5. **Automated validation** runs via GitHub Actions

### Option C: Email Submission

1. **Create ZIP file** with all your solution files
2. **Email to**: [EVENT-EMAIL-ADDRESS]
3. **Subject**: "Docker Security Challenge - [Your Team Name]"
4. **Results emailed back** within 30 minutes

### Option D: File Upload Form

1. **Visit**: [UPLOAD-FORM-LINK]
2. **Select your team** from dropdown
3. **Upload files** individually or as ZIP
4. **Automatic validation** and immediate results

## 📁 Required File Structure

Your submission should look like this:

```
your-submission/
├── Dockerfile.secure              # Your fixed Dockerfile (REQUIRED)
├── SOLUTION-REPORT.md             # Your analysis report (REQUIRED)
├── README.md                      # How to run your solution (REQUIRED)
├── docker-compose.secure.yml      # Optional: secure compose file
└── screenshots/                   # Optional: demo images
    ├── before-vulnerability.png
    └── after-security-fix.png
```

## 📝 Solution Report Template

Copy this template for your `SOLUTION-REPORT.md`:

````markdown
# Docker Security Challenge Solution

**Team/Individual**: [Your Name]
**Submission Date**: [Date]
**Time Spent**: [Approximate hours]

## Vulnerabilities Discovered

### 1. [Vulnerability Name] - [Risk Level: HIGH/MEDIUM/LOW]

- **Location**: [Where you found it]
- **Risk**: [What damage could this cause]
- **Exploitation**: [How an attacker could exploit this]

### 2. [Next Vulnerability]

- **Location**:
- **Risk**:
- **Exploitation**:

## Security Fixes Implemented

### 1. [Fix Name]

- **Problem Solved**: [Which vulnerability this addresses]
- **Implementation**:
  ```dockerfile
  # Your secure code here
  RUN adduser...
  USER nextjs
  ```
````

- **Verification**: [How to test this fix]

### 2. [Next Fix]

- **Problem Solved**:
- **Implementation**:
- **Verification**:

## Testing Your Solution

### Build Command:

```bash
docker build -t my-secure-app -f Dockerfile.secure .
```

### Run Command:

```bash
docker run -p 3000:5173 my-secure-app
```

### Verification Commands:

```bash
# Test 1: Check user
docker run --rm my-secure-app whoami
# Expected: [non-root username]

# Test 2: Check app works
curl http://localhost:3000
# Expected: HTML response

# Test 3: [Any other tests you recommend]
```

## Lessons Learned

[What did you learn from this challenge? What was most surprising?]

## Additional Security Measures

[Any bonus security features you implemented beyond the basic requirements]

````

## 🧪 Self-Testing Before Submission

**CRITICAL**: Test your solution before submitting!

```bash
# 1. Clone the original challenge repository
git clone [CHALLENGE-REPO-URL]
cd vuln-weather-app

# 2. Replace the Dockerfile with your secure version
cp /path/to/your/Dockerfile.secure ./Dockerfile

# 3. Test that it builds and runs
docker build -t test-solution .
docker run -p 8080:5173 test-solution

# 4. Run the critical tests
docker run --rm test-solution whoami
# ✅ Should NOT return "root"

curl http://localhost:8080
# ✅ Should return HTML content

# 5. If both tests pass, you're ready to submit!
````

## 🚨 Common Issues to Avoid

### Technical Issues:

- ❌ **Solution still runs as root** - This is the main vulnerability!
- ❌ **App doesn't start** - Test locally first
- ❌ **Missing files** - Check the required file structure
- ❌ **Wrong file names** - Use exact names specified

### Documentation Issues:

- ❌ **No explanation** - We need to see you understand the vulnerabilities
- ❌ **Copy-paste solutions** - Write in your own words
- ❌ **Missing testing instructions** - How do we verify your solution works?

### Submission Issues:

- ❌ **Multiple submissions** in different places - Pick one method
- ❌ **Late submission** - Watch the deadline!
- ❌ **Incomplete submission** - All required files must be included

## ⏰ Timeline Recommendations

### 72-Hour Strategy:

- **Hours 0-8**: Read challenge, understand vulnerabilities
- **Hours 8-24**: Implement first fixes, test basic functionality
- **Hours 24-48**: Refine solution, add advanced security features
- **Hours 48-64**: Write documentation, take screenshots
- **Hours 64-72**: Final testing, polish, and submit

### Quick Win Strategy (if short on time):

- **Focus on root user fix** - This is worth the most points
- **Get the app working** - Functionality is critical
- **Document clearly** - Explain what you changed and why
- **Submit early** - You can always update your solution

## 📊 How Your Solution Will Be Judged

### Automated Testing (63 points):

- **Root user fix** (10 points) - Container must not run as root
- **App functionality** (20 points) - Application must work correctly
- **Production server** (8 points) - Should use production server, not dev
- **File ownership** (5 points) - Files should be owned by non-root user
- **Dockerfile quality** (10 points) - Proper USER directive, user creation, etc.
- **Security practices** (10 points) - Specific versions, cache cleaning, etc.

### Manual Review (37 points):

- **Documentation quality** (5 points) - Clear explanations
- **Vulnerability discovery** (15 points) - How many you found and explained
- **Risk assessment** (10 points) - Understanding of security impact
- **Advanced features** (7 points) - Bonus security implementations

### Getting Help:

- **General questions**: [FORUM/CHAT-LINK]
- **Technical issues**: [SUPPORT-EMAIL]
- **Submission problems**: [ORGANIZER-CONTACT]

## 🏆 Tips for Success

1. **Submit early and iterate** - You can update your solution multiple times
2. **Test locally first** - Don't rely on the automated validation to debug
3. **Read error messages** - The validation script gives detailed feedback
4. **Focus on understanding** - Don't just fix, understand why it's vulnerable
5. **Document thoroughly** - Good documentation can earn significant points

---

**Good luck with the challenge! Remember: this is about learning security, not just fixing code.** 🔐

## 📋 File Structure Expected

```
your-solution/
├── Dockerfile.secure              # Main deliverable
├── SOLUTION-REPORT.md             # Required documentation
├── docker-compose.secure.yml      # Optional but recommended
├── README.md                      # How to run/test
└── screenshots/                   # Optional: demo screenshots
    ├── before-root-user.png
    └── after-secure-user.png
```

## 📝 Required Documentation (SOLUTION-REPORT.md)

Your report should include:

### 1. Vulnerabilities Found (30 points)

```markdown
## Vulnerabilities Discovered

### 1. Root User Execution (HIGH RISK)

- **Location**: Dockerfile lines 4-5 (commented out)
- **Risk**: Container escape, privilege escalation
- **Exploitation**: [Explain how this could be exploited]

### 2. [Your next vulnerability]

- **Location**:
- **Risk**:
- **Exploitation**:
```

### 2. Solutions Implemented (35 points)

````markdown
## Security Fixes Applied

### 1. Non-Root User Implementation

- **Change**: Added USER directive and user creation
- **Code**:
  ```dockerfile
  RUN addgroup -g 1001 -S nodejs && \
      adduser -S nextjs -u 1001 -G nodejs
  USER nextjs
  ```
````

- **Verification**: `docker run --rm [image] whoami` returns `nextjs`

### 2. [Your next fix]

````

### 3. Testing and Validation (10 points)
```markdown
## How to Test My Solution

### Build and Run:
```bash
docker build -t my-secure-app -f Dockerfile.secure .
docker run -p 3000:5173 my-secure-app
````

### Verification Commands:

```bash
# Test 1: Verify non-root user
docker run --rm my-secure-app whoami
# Expected: nextjs (not root)

# Test 2: Verify app works
curl http://localhost:3000
# Expected: HTML response
```

## 🧪 Self-Testing Before Submission

Test your solution with these commands:

```bash
# Critical test - MUST PASS
docker run --rm your-image whoami
# Should NOT return "root"

# Functionality test - MUST PASS
docker run -p 8080:5173 your-image
curl http://localhost:8080
# Should return HTML content

# Production server test - RECOMMENDED
docker run --rm your-image ps aux | grep npm
# Should show "preview" not "dev"
```

## 🚨 Common Submission Mistakes

**Avoid these issues:**

- ❌ Solution still runs as root
- ❌ App doesn't start or work
- ❌ No documentation explaining changes
- ❌ Files missing from submission
- ❌ Can't reproduce your solution

## 📞 Need Help?

**During submission:**

- Ask judges for clarification
- Use the self-testing commands above
- Check that your solution actually works

**File upload issues:**

- Contact organizers immediately
- Have backup submission method ready
- Ensure files are properly named

---

**Deadline: [TIME] | Upload Link: [LINK] | Questions: Ask judges**
