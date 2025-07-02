# Hackathon Organizer Setup 🎪

**This file is for hackathon organizers only. Participants should start with `DOCKER-SECURITY-CHALLENGE.md`**

## 🚨 Important: Keep Solutions Private!

The `solutions/` directory contains all answers and should **never** be shared with participants. It's already in `.gitignore` to prevent accidental commits.

## 📋 Pre-Hackathon Setup

### 1. Get Your Private Solutions

Contact the hackathon creator to get:

- `solutions/setup-challenge.sh` - Environment setup script
- `solutions/ORGANIZER-SOLUTION-GUIDE.md` - Complete solutions and scoring rubric
- `solutions/Dockerfile.secure` - Secure Docker configuration
- `solutions/docker-compose.secure.yml` - Production-ready compose file
- `solutions/demo-docker-security.sh` - Automated vulnerability demo

### 2. Run Pre-Event Setup

```bash
# Navigate to the solutions directory (private)
cd solutions/

# Run the organizer setup script
bash setup-challenge.sh
```

This will:

- ✅ Verify all challenge files are present
- ✅ Test that vulnerabilities actually exist
- ✅ Provide your organizer checklist
- ✅ Give you quick testing commands

### 3. Brief Your Team

Review `solutions/ORGANIZER-SOLUTION-GUIDE.md` which contains:

- Complete vulnerability explanations
- Scoring rubric (100 points total)
- Progressive hints to give stuck participants
- Testing commands to validate solutions
- Common mistakes to watch for

## 🎯 Day of Hackathon

### For Participants:

- Direct them to start with `DOCKER-SECURITY-CHALLENGE.md`
- Give them this test command: `docker build -t vuln-weather-app . && docker run --rm vuln-weather-app whoami`
- Expected result: Should return "root" (the main vulnerability)

### For Judges:

- Use the scoring rubric in `solutions/ORGANIZER-SOLUTION-GUIDE.md`
- Key vulnerability: Container runs as root (10 points)
- Quick test: `docker run --rm [their-image] whoami` should NOT return "root"

### Progressive Hints (if participants are stuck):

1. **Gentle**: "Check who's running your application inside the container"
2. **Medium**: "Look at the commented lines in the Dockerfile"
3. **Strong**: "The principle of least privilege applies to containers too"

## 🏆 Judging Quick Reference

**Total Points: 100**

- Discovery (30 pts): Finding vulnerabilities
- Understanding (25 pts): Explaining risks and impacts
- Implementation (35 pts): Creating working secure solutions
- Bonus (10 pts): Advanced features

**Key Tests:**

```bash
# Test 1: User check (should NOT be root)
docker run --rm [their-image] whoami

# Test 2: Basic functionality
docker run -p 3000:5173 [their-image]
# Visit http://localhost:3000 - should work
```

## 📞 Need Help?

Contact the hackathon creator if you need:

- The complete solutions package
- Help with scoring difficult solutions
- Clarification on any vulnerabilities
- Technical support during the event

---

**Remember: Keep solutions private and let participants discover vulnerabilities themselves!** 🔐
