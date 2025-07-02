# 🎯 Participant Quick Start - Get Started in 5 Minutes

**How to tackle the Docker Security Challenge**

## Step 1: Get the Challenge (1 minute)

```bash
# 1. Clone or download the challenge
git clone [REPO-LINK]
cd vuln-weather-app

# 2. Test the vulnerable app
docker build -t vuln-weather-app .
docker run -p 5173:5173 vuln-weather-app
```

Visit http://localhost:5173 - you should see a weather app! ☀️

## Step 2: Find the Main Security Issue (2 minutes)

```bash
# Test who the container runs as
docker run --rm vuln-weather-app whoami
```

**Did it say "root"?** 🚨 **That's the main vulnerability!**

Containers should NEVER run as root user - it's a huge security risk!

## Step 3: Fix the Security Issue (10-30 minutes)

Look at the `Dockerfile` and fix it so:

1. ✅ Container doesn't run as root
2. ✅ App still works at http://localhost:5173

**Hint**: You need to:

- Create a non-root user
- Switch to that user before starting the app
- Maybe fix file permissions

## Step 4: Test Your Fix (2 minutes)

```bash
# 1. Build your secure version
docker build -t my-secure-app -f Dockerfile.secure .

# 2. Test security (should NOT be root)
docker run --rm my-secure-app whoami

# 3. Test app still works
docker run -p 8080:5173 -d my-secure-app
curl http://localhost:8080
```

If both tests pass, you're doing great! 🎉

## Step 5: Document What You Found (10 minutes)

Create `SOLUTION-REPORT.md` explaining:

```markdown
# My Docker Security Fixes

## What I Found

- The container was running as root user
- This is dangerous because...

## What I Fixed

- Added a non-root user called 'appuser'
- Changed file ownership
- Switched to non-root user before starting app

## How to Test

1. Build: docker build -t secure-app -f Dockerfile.secure .
2. Test: docker run --rm secure-app whoami
3. Should show 'appuser' not 'root'
```

## Step 6: Submit Your Solution

**Submit these files:**

1. `Dockerfile.secure` - your fixed Dockerfile
2. `SOLUTION-REPORT.md` - what you found and fixed
3. `README.md` - how to run your solution

**Submit via:** [CHECK WITH ORGANIZER]

- Email ZIP file, OR
- Upload to Google Drive folder, OR
- GitHub Pull Request

## Quick Security Checklist ✅

Before submitting, verify:

- [ ] `docker run --rm my-app whoami` shows non-root user
- [ ] App still works when you visit it in browser
- [ ] You documented what you found and fixed
- [ ] You can explain WHY running as root is dangerous

## Common Beginner Mistakes

❌ **Don't do this:**

```dockerfile
USER root  # Never leave it as root!
```

✅ **Do this instead:**

```dockerfile
RUN adduser --disabled-password --gecos '' appuser
USER appuser  # Switch to non-root user
```

## Need Help?

**Stuck?** Here are some hints:

1. Look up "Docker non-root user" tutorials
2. Check file permissions with `ls -la`
3. Remember: create user → change ownership → switch user
4. Ask in the event chat/forum!

## Bonus Points 🌟

Found the root user issue? Look for these additional vulnerabilities:

- Is it using a development server in production?
- Are there unnecessary packages installed?
- Are there security configurations missing?
- Check the `.dockerignore` file

---

## Time Management Tips

**Got limited time?** Focus on:

1. **30 minutes**: Fix root user issue + document it
2. **1 hour**: + Find 1-2 additional security issues
3. **2+ hours**: + Implement all security best practices

**The root user fix alone can get you a passing grade!** 🎯
