# Solutions Directory 🔐

**⚠️ ORGANIZERS ONLY - DO NOT SHARE WITH PARTICIPANTS**

This directory contains:

- `ORGANIZER-SOLUTION-GUIDE.md` - Complete solution guide with scoring rubric
- `Dockerfile.secure` - Secure version of the Dockerfile
- `docker-compose.secure.yml` - Secure Docker Compose configuration
- `DOCKER-VULNERABILITIES.md` - Detailed vulnerability explanations
- `demo-docker-security.sh` - Automated demonstration script

## Quick Organizer Commands

### Test Participant Solutions

```bash
# Test if they fixed the root user issue
docker run --rm [their-image] whoami

# Test file system security
docker run --rm [their-image] touch /test.txt

# Test resource limits (need to be set in docker run/compose)
docker stats [their-container]
```

### Demo the Vulnerabilities

```bash
# From the solutions directory
bash demo-docker-security.sh
```

### Scoring Quick Reference

- Root user fix: 10 points
- Dev server fix: 8 points
- File security: 7 points
- Resource limits: 5 points
- Working solution: 20 points
- Testing: 10 points
