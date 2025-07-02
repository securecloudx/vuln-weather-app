# 🚀 Organizer Quick Start - 5 Minutes to Launch

**Simple steps to run your Docker Security Hackathon**

## Step 1: Test the Challenge (2 minutes)

```bash
# 1. Test the vulnerable app
docker build -t vuln-weather-app .
docker run -p 5173:5173 vuln-weather-app

# 2. Visit http://localhost:5173 - it should work
# 3. Test security issue
docker run --rm vuln-weather-app whoami
# Should show "root" - this is the main vulnerability!
```

## Step 2: Set Up Submissions (2 minutes)

**Choose ONE method:**

### Option A: Email Submissions (Simplest)

```bash
# Just give participants your email address
# They'll send ZIP files with their solutions
# You manually test each one
```

### Option B: Google Drive (Recommended)

```bash
# 1. Create Google Drive folder
# 2. Make subfolders: team-1, team-2, team-3, etc.
# 3. Share folder link with participants
# 4. They upload files to their team folder
```

### Option C: GitHub (For Tech-Savvy Groups)

```bash
# 1. Create GitHub repository
# 2. Add participants as collaborators
# 3. They submit via Pull Requests
```

## Step 3: Launch Event (1 minute)

**Send this to participants:**

```
🐳 DOCKER SECURITY CHALLENGE

Your mission: Fix the security vulnerabilities in this weather app!

🔗 Challenge: [YOUR-REPO-LINK]
📤 Submit to: [YOUR-SUBMISSION-METHOD]
⏰ Deadline: [YOUR-DEADLINE]

📋 What to submit:
1. Dockerfile.secure (your fixed version)
2. SOLUTION-REPORT.md (what you found and fixed)

🎯 Success criteria:
- Container should NOT run as root
- App should still work
- Document what you fixed

Questions? Email [YOUR-EMAIL]
```

## Step 4: Grade Submissions (Manual - 5 min per team)

For each team submission:

```bash
# 1. Download their files
# 2. Test their solution
docker build -t team-solution -f Dockerfile.secure .

# 3. Check security (should NOT be root)
docker run --rm team-solution whoami

# 4. Check app works
docker run -p 8080:5173 -d team-solution
curl http://localhost:8080

# 5. Read their report
# 6. Give score out of 100
```

## Simple Scoring (100 points total)

- **Container not root** (40 points): Pass/Fail
- **App still works** (30 points): Pass/Fail
- **Good documentation** (20 points): Did they explain what they found?
- **Extra security** (10 points): Did they fix other issues?

## That's It! 🎉

**Total organizer time: ~30 minutes setup + 5 minutes per team grading**

---

## Need the Automated Version?

If you have 20+ teams, use the automated scripts in the `solutions/` folder:

```bash
cd solutions
./monitor-submissions.sh    # Auto-checks submissions
./generate-dashboard.sh     # Creates live leaderboard
./batch-validate.sh         # Grades all teams at once
```

But for small events (5-15 teams), manual grading is often faster and more personal!
