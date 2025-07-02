# 72-Hour Docker Security Hackathon - Complete Setup Guide 🚀

**A comprehensive guide for running a successful asynchronous virtual Docker security challenge**

## 📋 Overview

This repository contains everything needed to run a **72-hour asynchronous virtual Docker security hackathon** where participants discover and mitigate vulnerabilities in a deliberately insecure weather application.

### 🎯 Event Format

- **Duration**: 72 hours continuous
- **Format**: Asynchronous (participants work at their own pace)
- **Submission**: Rolling submissions throughout the period
- **Validation**: Automated scoring with immediate feedback
- **Scalability**: Designed for 5-500+ participants

## 📁 Repository Structure

```
vuln-weather-app/
├── 📖 README.md                           # Challenge app overview
├── 📋 PARTICIPANT-SUBMISSION-GUIDE.md     # How participants submit
├── 🐳 Dockerfile                          # Vulnerable configuration
├── ⚙️  docker-compose.yml                 # Development setup
├── 📦 package.json                        # Node.js dependencies
├── 🚫 .gitignore                          # Protected files
├── 📁 src/                                # React weather app
├── 📁 public/                             # Static assets
└── 📁 solutions/                          # 🔒 ORGANIZER-ONLY FILES
    ├── 📊 SUBMISSION-MANAGEMENT-GUIDE.md  # How to run the event
    ├── 🎯 ORGANIZER-SOLUTION-GUIDE.md     # Complete solution guide
    ├── 🛡️  DOCKER-VULNERABILITIES.md       # Vulnerability explanations
    ├── 🧪 validate-solution.sh           # Automated scoring script
    ├── 📋 VALIDATION-REFERENCE.md         # Quick scoring reference
    ├── 👀 monitor-submissions.sh          # Continuous monitoring
    ├── 📊 generate-dashboard.sh           # Live leaderboard
    ├── ⚡ batch-validate.sh               # Final batch processing
    ├── 🐳 Dockerfile.secure               # Secure reference solution
    └── 🔧 docker-compose.secure.yml       # Secure compose setup
```

## 🚀 Quick Start for Organizers

### 1. Pre-Event Setup (1 hour)

```bash
# 1. Clone and prepare the challenge
git clone <repository-url>
cd vuln-weather-app

# 2. Test the vulnerable app
docker build -t vuln-weather-app .
docker run -p 5173:5173 vuln-weather-app

# 3. Set up submission collection
mkdir -p hackathon-submissions/{submissions,validation-results,final-ranking}

# 4. Configure event details
# Edit these files with your specific details:
# - PARTICIPANT-SUBMISSION-GUIDE.md (submission links, deadlines)
# - solutions/generate-dashboard.sh (event end time)
# - solutions/monitor-submissions.sh (notification settings)
```

### 2. Launch Event (5 minutes)

```bash
# 1. Start automated monitoring
cd solutions
./monitor-submissions.sh &

# 2. Start dashboard generation (updates every 60 seconds)
while true; do ./generate-dashboard.sh; sleep 60; done &

# 3. Share with participants
# - README.md (challenge overview)
# - PARTICIPANT-SUBMISSION-GUIDE.md (submission instructions)
# - Submission platform access
```

### 3. During Event (Mostly Automated)

- ✅ **Automated submission monitoring** runs continuously
- ✅ **Real-time validation** provides immediate feedback
- ✅ **Live dashboard** updates automatically
- ✅ **Minimal intervention** required from organizers

### 4. Post-Event Processing (30 minutes)

```bash
# 1. Stop monitoring
pkill -f monitor-submissions.sh

# 2. Run final batch validation
./batch-validate.sh

# 3. Generate final results
./generate-dashboard.sh

# 4. Review final-results.txt for awards
cat final-results.txt
```

## 🎯 For Participants

### Challenge Overview

You'll receive a deliberately vulnerable Docker setup for a weather application. Your mission:

1. **🕵️ Analyze** the current Docker configuration
2. **🔍 Discover** security vulnerabilities (hint: there are many!)
3. **🛠️ Fix** the security issues
4. **📝 Document** your findings and solutions
5. **✅ Submit** your secure solution

### Key Vulnerabilities to Find

- Running containers as root user
- Using development servers in production
- Missing security configurations
- Exposed secrets and sensitive data
- Improper file permissions
- Missing container optimizations

### Submission Requirements

- `Dockerfile.secure` (your fixed version)
- `SOLUTION-REPORT.md` (explaining what you found and fixed)
- `README.md` (instructions to run your solution)

## 🏆 Scoring System (63 points total)

| Category               | Points | Description                      |
| ---------------------- | ------ | -------------------------------- |
| **Root User Fix**      | 10     | Container doesn't run as root    |
| **Application Works**  | 20     | App still functions correctly    |
| **Production Server**  | 8      | Uses production-grade server     |
| **Dockerfile Quality** | 10     | Clean, optimized Dockerfile      |
| **Security Measures**  | 10     | Additional security improvements |
| **Documentation**      | 5      | Clear explanation of changes     |

### Grade Scale

- **A (50+ points)**: Excellent security implementation
- **B (38+ points)**: Good security practices
- **C (25+ points)**: Basic security improvements
- **F (<25 points)**: Minimal security measures

## 🛠️ Technical Features

### Automated Validation

- **Instant feedback** on submission
- **Detailed scoring** breakdown
- **Security vulnerability** detection
- **Functional testing** to ensure app still works

### Real-time Dashboard

- **Live leaderboard** with current standings
- **Event statistics** and progress tracking
- **Countdown timer** showing time remaining
- **Automatic updates** every 60 seconds

### Flexible Submission Methods

- **Google Drive** upload (recommended)
- **GitHub** pull requests
- **Email** submissions
- **Web form** uploads

### Scalability

- **Handles unlimited participants** via automation
- **Minimal organizer intervention** required
- **Automated monitoring** and validation
- **Batch processing** for final results

## 📊 Event Management Tools

### For Continuous Monitoring

```bash
# Monitor submissions in real-time
./solutions/monitor-submissions.sh

# Generate live dashboard
./solutions/generate-dashboard.sh

# Watch for new submissions
watch -n 300 "ls -la submissions/"
```

### For Final Processing

```bash
# Validate all submissions at once
./solutions/batch-validate.sh

# Generate final ranking
cat final-results.txt

# View individual team results
cat validation-results/team-001-results.txt
```

## 🎯 Success Metrics

A successful 72-hour hackathon typically sees:

- **90%+ automated operation** (minimal manual intervention)
- **<2 hour** total organizer time commitment during event
- **Immediate feedback** for participants (within 10 minutes)
- **Fair, objective scoring** via automated validation
- **Scalable** from 5 to 500+ participants

## 🔧 Customization Options

### Easy Customizations

- **Event duration** (change from 72 hours to any period)
- **Scoring weights** (adjust point values in validate-solution.sh)
- **Submission methods** (enable/disable specific options)
- **Dashboard theme** (modify generate-dashboard.sh styling)

### Advanced Customizations

- **Additional vulnerabilities** (modify Dockerfile)
- **Different tech stack** (replace React app with Python/Java/etc.)
- **Custom validation rules** (extend validate-solution.sh)
- **Integration with platforms** (DevPost, HackerEarth, etc.)

## 🚨 Security Notes

- **Solutions directory** is protected via .gitignore
- **Participants cannot access** organizer files
- **Validation scripts** run in isolated environments
- **No persistent access** to organizer systems

## 📞 Support & Troubleshooting

### Common Issues

- **Submissions not appearing**: Check directory permissions
- **Validation failing**: Verify Docker environment
- **Dashboard not updating**: Check file permissions
- **Participants confused**: Share submission guide early

### Getting Help

- **Review logs**: Check monitoring.log for submission activity
- **Test validation**: Run validate-solution.sh manually
- **Debug dashboard**: Check browser console for errors
- **Contact support**: [Your support channels]

---

**🎉 You're all set for a successful 72-hour Docker security hackathon!**

This complete setup handles everything from participant onboarding to final results, with minimal manual intervention required. The automated systems ensure fair, objective, and scalable evaluation regardless of participant count.

**Questions? Issues? Check the individual guide files in the `solutions/` directory for detailed instructions.**
