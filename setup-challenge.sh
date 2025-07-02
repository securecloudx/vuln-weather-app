#!/bin/bash

# Hackathon Organizer Setup Script
# Run this to prepare the challenge environment

echo "🔐 Setting up Docker Security Challenge for Hackathon"
echo "=================================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${YELLOW}Setting up challenge environment...${NC}"

# Ensure solutions directory exists and is protected
if [ ! -d "solutions" ]; then
    mkdir -p solutions
    echo "✅ Created solutions directory"
fi

# Create a .gitignore to prevent accidental solution sharing
if [ ! -f "solutions/.gitignore" ]; then
    cat >solutions/.gitignore <<EOF
# Don't accidentally commit solutions!
*
!.gitignore
!README.md
EOF
    echo "✅ Protected solutions directory"
fi

# Create solutions README
cat >solutions/README.md <<EOF
# Solutions Directory 🔐

**⚠️ ORGANIZERS ONLY - DO NOT SHARE WITH PARTICIPANTS**

This directory contains:
- \`ORGANIZER-SOLUTION-GUIDE.md\` - Complete solution guide with scoring rubric
- \`Dockerfile.secure\` - Secure version of the Dockerfile
- \`docker-compose.secure.yml\` - Secure Docker Compose configuration
- \`DOCKER-VULNERABILITIES.md\` - Detailed vulnerability explanations
- \`demo-docker-security.sh\` - Automated demonstration script

## Quick Organizer Commands

### Test Participant Solutions
\`\`\`bash
# Test if they fixed the root user issue
docker run --rm [their-image] whoami

# Test file system security
docker run --rm [their-image] touch /test.txt

# Test resource limits (need to be set in docker run/compose)
docker stats [their-container]
\`\`\`

### Demo the Vulnerabilities
\`\`\`bash
# From the solutions directory
bash demo-docker-security.sh
\`\`\`

### Scoring Quick Reference
- Root user fix: 10 points
- Dev server fix: 8 points  
- File security: 7 points
- Resource limits: 5 points
- Working solution: 20 points
- Testing: 10 points
EOF

echo "✅ Created solutions documentation"

# Verify the challenge files exist
echo ""
echo -e "${YELLOW}Verifying challenge files...${NC}"

required_files=(
    "Dockerfile"
    "DOCKER-SECURITY-CHALLENGE.md"
    "package.json"
    ".dockerignore"
)

missing_files=()
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Challenge environment ready!${NC}"
    echo ""
    echo "📋 Organizer Checklist:"
    echo "- Share the repository with participants"
    echo "- Tell them to start with DOCKER-SECURITY-CHALLENGE.md"
    echo "- Keep the solutions/ directory private"
    echo "- Use solutions/ORGANIZER-SOLUTION-GUIDE.md for judging"
    echo ""
    echo "🎯 Quick Test Command for Participants:"
    echo "docker build -t vuln-weather-app . && docker run --rm vuln-weather-app whoami"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Missing required files. Please ensure all challenge files are present.${NC}"
    exit 1
fi

# Test that the vulnerable version works
echo -e "${YELLOW}Testing vulnerable version...${NC}"
if docker build -t vuln-weather-app-test . >/dev/null 2>&1; then
    echo "✅ Vulnerable Docker image builds successfully"

    # Test the whoami command (should return root)
    if docker run --rm vuln-weather-app-test whoami 2>/dev/null | grep -q "root"; then
        echo "✅ Root vulnerability confirmed (good for challenge)"
    else
        echo "⚠️  Warning: Container might not be running as root"
    fi

    # Cleanup test image
    docker rmi vuln-weather-app-test >/dev/null 2>&1
else
    echo "❌ Warning: Vulnerable Docker image failed to build"
fi

echo ""
echo -e "${GREEN}🎉 Challenge setup complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Review solutions/ORGANIZER-SOLUTION-GUIDE.md"
echo "2. Test the challenge yourself"
echo "3. Brief your judging team"
echo "4. Let the hacking begin! 🔐"
