# 📋 Multi-Layer Security Challenge - Organizer Guide

**Running a Code-to-Cloud Security Challenge with Multiple Skill Tracks**

## 🎯 Challenge Overview

This is a **comprehensive security challenge** covering:

- 🌐 **Frontend Security** (client-side vulnerabilities)
- 🔒 **Authentication** (hardcoded creds, weak tokens)
- 📡 **API Security** (exposed keys, rate limiting)
- 🐳 **Container Security** (Docker hardening)
- ☁️ **Cloud Security** (deployment security)
- 🔄 **CI/CD Security** (pipeline security)

**Total possible points: 110** (allows bonus scoring)

## 🏁 Participant Skill Tracks

### 🟢 Beginner Track (30-40 points)

**Target**: New to security, 1-2 hours
**Focus**: Critical vulnerabilities that can be found quickly

- Authentication bypass via browser DevTools
- Hardcoded admin credentials in source code
- Container running as root user

### 🟡 Intermediate Track (50-70 points)

**Target**: Some security experience, 2-4 hours
**Focus**: Full-stack security understanding

- All beginner items +
- API key exposure and management
- Production container configuration
- Basic deployment security

### 🔴 Advanced Track (80+ points)

**Target**: Security professionals, 4-8 hours
**Focus**: Complete DevSecOps pipeline

- All intermediate items +
- CI/CD security automation
- Cloud security controls
- Advanced threat modeling

### 🚀 Expert Track (90+ points)

**Target**: Security engineers, 8+ hours
**Focus**: Custom security engineering

- All advanced items +
- Custom security tooling
- Zero-trust architecture
- Advanced monitoring and detection

## 🚀 Quick Setup (5 minutes)

### 1. Test the Challenge

```bash
# Make sure it works
docker build -t vuln-app .
docker run -p 5173:5173 vuln-app
# Visit http://localhost:5173
```

### 2. Demo the Main Vulnerabilities

```bash
# Show the auth bypass
# Open browser DevTools and paste:
localStorage.setItem('token', 'bypass')
localStorage.setItem('user', 'hacker')
window.location.href = '/dashboard'

# Show container runs as root
docker run --rm vuln-app whoami  # Returns 'root'

# Show hardcoded creds
# admin/letmein works as login
```

### 3. Choose Your Event Format

#### Option A: Multi-Track Event (Recommended)

- Announce all 4 tracks at start
- Participants self-select their difficulty
- Different submission requirements per track
- Separate scoring and prizes per track

#### Option B: Progressive Challenge

- Everyone starts with Beginner track
- Unlock next track after completing previous
- Bonus points for completing multiple tracks
- Single leaderboard with track indicators

#### Option C: Time-Based Tracks

- First hour: Everyone does Beginner
- Remaining time: Choose your track
- Prevents people from being overwhelmed initially

## 📊 Quick Scoring Guide

### Automated Quick Tests (5 min per team)

```bash
# Test their solution
cd [team-submission]

# 1. Check container security (10 points)
docker build -t team-app -f Dockerfile.secure .
docker run --rm team-app whoami
# PASS: non-root user | FAIL: returns 'root'

# 2. Check app functionality (20 points)
docker run -p 8080:5173 -d team-app
sleep 3
curl -s http://localhost:8080 | grep -i "weather\|react"
# PASS: returns HTML | FAIL: no response

# 3. Check production server (5 points)
docker run --rm team-app ps aux | grep node
# PASS: shows 'preview' | FAIL: shows 'dev'
```

### Manual Review (Variable time)

- **Documentation quality** (5-15 points based on track)
- **Vulnerability discovery** (varies by track)
- **Implementation quality** (varies by track)
- **Innovation/creativity** (bonus points)

## 🎯 Track-Specific Grading

### 🟢 Beginner Track Scoring (40 points max)

- **Container not root** (15 points) - Critical fix
- **Found auth bypass** (10 points) - Vulnerability discovery
- **Found hardcoded creds** (10 points) - Code review skills
- **Documentation** (5 points) - Clear explanation

**Passing grade**: 25+ points (fixed container + found 1 major vuln)

### 🟡 Intermediate Track Scoring (70 points max)

- **All beginner criteria** (40 points)
- **API key secured** (15 points) - Full-stack understanding
- **Production config** (10 points) - Deployment awareness
- **Security testing** (5 points) - Validation skills

**Passing grade**: 45+ points

### 🔴 Advanced Track Scoring (90 points max)

- **All intermediate criteria** (70 points)
- **CI/CD security** (10 points) - Pipeline understanding
- **Cloud security** (5 points) - Infrastructure awareness
- **Threat modeling** (5 points) - Strategic thinking

**Passing grade**: 65+ points

### 🚀 Expert Track Scoring (110+ points)

- **All advanced criteria** (90 points)
- **Custom tooling** (10 points) - Engineering skills
- **Architecture design** (10 points) - Systems thinking
- **Innovation bonus** (unlimited) - Creative solutions

**Passing grade**: 80+ points

## ⏰ Time Management

### Small Event (5-15 teams)

**Manual grading recommended**

- **Setup**: 15 minutes
- **Event**: 2-4 hours depending on track
- **Grading**: 5-10 minutes per team
- **Results**: 30 minutes

### Large Event (20+ teams)

**Use automated validation scripts**

- **Setup**: 30 minutes (configure automation)
- **Event**: 2-8 hours (participants work independently)
- **Automated scoring**: 15 minutes for all teams
- **Manual review**: 2-3 minutes per team for documentation
- **Results**: 15 minutes

## 🏆 Awards by Track

### Suggested Award Categories

#### Per-Track Awards

- **🟢 Best Beginner Solution** - Cleanest fixes and documentation
- **🟡 Best Intermediate Solution** - Most comprehensive security
- **🔴 Best Advanced Solution** - Complete pipeline security
- **🚀 Best Expert Solution** - Most innovative security engineering

#### Cross-Track Awards

- **🚨 Best Vulnerability Discovery** - Most creative finding
- **🛠️ Best Implementation** - Cleanest, most production-ready fixes
- **📚 Best Documentation** - Clearest explanation and teaching
- **⚡ Speed Award** - Fastest completion (any track)

#### Special Recognition

- **🎯 Track Hopper** - Completed multiple tracks
- **🔧 Tool Builder** - Created useful security tools
- **🏛️ Architect** - Best overall security design

## 💡 Tips for Success

### For Small Events

- **Manual grading** gives personal feedback
- **Track diversity** keeps different skill levels engaged
- **Progressive hints** help people level up during event
- **Peer learning** encourage collaboration within tracks

### For Large Events

- **Automated scoring** for objective criteria
- **Self-assessment** tools help participants validate
- **Real-time leaderboard** shows progress by track
- **Async submission** allows flexible timing

### For Educational Events

- **Start everyone on Beginner** to build confidence
- **Provide track transition guidance**
- **Emphasize learning over winning**
- **Share solutions afterward** for continued learning

## 🔧 Event Variants

### Variant 1: "Security Bootcamp"

- **Day 1**: Everyone does Beginner track together
- **Day 2**: Split into Intermediate/Advanced tracks
- **Focus**: Learning progression

### Variant 2: "Security CTF"

- **All tracks available** from start
- **Flag-based scoring** for specific vulnerabilities
- **Focus**: Competition and discovery

### Variant 3: "DevSecOps Workshop"

- **Advanced/Expert tracks only**
- **Team collaboration** encouraged
- **Focus**: Professional development

## 📋 Pre-Event Checklist

### Technical Setup

- [ ] Test all vulnerability scenarios work
- [ ] Validate automated scoring scripts
- [ ] Prepare track-specific submission templates
- [ ] Set up monitoring/leaderboard if using

### Communication Prep

- [ ] Explain track system clearly to participants
- [ ] Provide time estimates for each track
- [ ] Share self-assessment criteria
- [ ] Set expectations for submission format

### Judging Prep

- [ ] Train judges on track-specific criteria
- [ ] Prepare scoring rubrics for each track
- [ ] Set up batch validation environment
- [ ] Plan award ceremony structure

---

## 🎉 Sample Event Schedule

### 4-Hour Multi-Track Event

- **0:00-0:15**: Welcome, track explanation, team formation
- **0:15-0:30**: Environment setup, initial testing
- **0:30-3:30**: Challenge time (participants work on chosen tracks)
- **3:30-3:45**: Final submissions, validation
- **3:45-4:00**: Results, awards, wrap-up

### 8-Hour Intensive

- **Hour 1**: Setup and Beginner track for all
- **Hour 2-3**: Track selection and specialization
- **Hour 4-7**: Deep work on chosen track
- **Hour 8**: Demos, judging, awards

**This multi-track approach ensures everyone has an appropriate challenge level while maintaining a single event structure!** 🎯
