# 🚀 START HERE - Docker Security Challenge

**Simple guide for everyone - organizers and participants**

## 👋 New to This? Pick Your Role:

### 🎯 I'm a PARTICIPANT (want to solve the challenge)

**→ Open: `PARTICIPANT-QUICK-START.md`**

**TLDR**: Fix the Docker security issues in 30-60 minutes

- Main issue: Container runs as root (security risk!)
- Fix it: Add non-root user to Dockerfile
- Submit your solution

### 📋 I'm an ORGANIZER (running the event)

**→ Open: `ORGANIZER-QUICK-START.md`**

**TLDR**: Launch event in 5 minutes

- Test the challenge works
- Set up submission method (email/Google Drive)
- Send challenge to participants
- Grade manually (5 min per team)

---

## 🎯 The Challenge (for participants)

You have a weather app with Docker security vulnerabilities. **Your mission: make it secure!**

### Quick Test

```bash
git clone [repo]
cd vuln-weather-app
docker build -t test-app .
docker run --rm test-app whoami
```

**If it says "root" - that's the main bug to fix!** 🐛

### What You'll Submit

1. **Dockerfile.secure** - your fixed version
2. **SOLUTION-REPORT.md** - what you found and how you fixed it

### Success Criteria

- ✅ Container doesn't run as root
- ✅ App still works in browser
- ✅ You can explain what was wrong

---

## 📋 Running an Event (for organizers)

### Tiny Event (1-5 teams) - Manual Grading

**Time needed: 30 min setup + 5 min per team**

1. **Test challenge**: Make sure Docker setup works
2. **Pick submission method**: Email is simplest
3. **Send to participants**: Share repo + submission instructions
4. **Grade manually**: Test each team's solution

### Large Event (20+ teams) - Automated

**Use the automation scripts in `solutions/` folder**

```bash
cd solutions
./monitor-submissions.sh     # Auto-detects new submissions
./batch-validate.sh          # Grades all teams at once
./generate-dashboard.sh      # Creates live leaderboard
```

---

## 🤔 What's All the Complex Stuff?

This repo has **both simple and advanced options**:

### Simple (Start Here)

- `ORGANIZER-QUICK-START.md` - Run small events manually
- `PARTICIPANT-QUICK-START.md` - Solve the challenge quickly
- Manual grading, email submissions

### Advanced (For Big Events)

- `solutions/` folder - Automated validation and monitoring
- `HACKATHON-SETUP-GUIDE.md` - 72-hour virtual events
- Real-time dashboards, automated scoring

**Recommendation: Start simple, then use advanced features if needed!**

---

## 🆘 Quick Help

### For Participants

- **Can't get app running?** Check Docker is installed and working
- **Don't know Docker?** Look up "Docker tutorial" first
- **Stuck on security?** The main issue is "USER root" in Dockerfile
- **Need hints?** Ask organizer or check online Docker security guides

### For Organizers

- **Docker not working?** Make sure participants have Docker installed
- **Too many questions?** Share the participant quick-start guide
- **Want automation?** Use scripts in `solutions/` folder for 10+ teams
- **Grading too slow?** Focus on: root user fix + app works + documentation

---

## 📁 File Guide

**Start with these:**

- `START-HERE.md` ← You are here!
- `PARTICIPANT-QUICK-START.md` - For challenge solvers
- `ORGANIZER-QUICK-START.md` - For event runners

**Advanced stuff (optional):**

- `solutions/` folder - Automated tools
- `HACKATHON-SETUP-GUIDE.md` - Complex events
- `SUBMISSION-MANAGEMENT-GUIDE.md` - Advanced organization

**The actual challenge:**

- `Dockerfile` - The vulnerable configuration to fix
- `src/` - The React weather app code
- `README.md` - Basic app information

---

## 🎉 Success Looks Like...

### Participants Will:

- Learn Docker security basics
- Fix real vulnerabilities
- Understand why security matters
- Have fun with hands-on learning

### Organizers Will:

- Run smooth, educational event
- Minimal time investment
- Happy, engaged participants
- Clear learning outcomes

**Ready? Pick your quick-start guide and begin!** 🚀
