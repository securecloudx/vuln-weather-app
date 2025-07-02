#!/bin/bash

# Docker Security Vulnerability Demonstration Script
# This script demonstrates the vulnerabilities and their mitigations

echo "🚨 Docker Security Vulnerability Demonstration for SecureCloudX Hackathon"
echo "=================================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo -e "${RED}1. DEMONSTRATING VULNERABILITIES${NC}"
echo "=================================="

echo ""
echo -e "${YELLOW}Building vulnerable container...${NC}"
docker build -t vuln-weather-app:vulnerable -f Dockerfile .

echo ""
echo -e "${YELLOW}Building secure container...${NC}"
docker build -t vuln-weather-app:secure -f Dockerfile.secure .

echo ""
echo -e "${RED}VULNERABILITY TEST 1: Root User Access${NC}"
echo "Running vulnerable container and checking user:"
docker run --rm vuln-weather-app:vulnerable whoami
echo "☠️  Container is running as ROOT!"

echo ""
echo -e "${GREEN}SECURE VERSION: Non-root user${NC}"
echo "Running secure container and checking user:"
docker run --rm vuln-weather-app:secure whoami
echo "✅ Container is running as non-root user!"

echo ""
echo -e "${RED}VULNERABILITY TEST 2: File System Access${NC}"
echo "Checking what files are accessible in vulnerable container:"
docker run --rm vuln-weather-app:vulnerable ls -la /
echo "☠️  Full filesystem access as root!"

echo ""
echo -e "${RED}VULNERABILITY TEST 3: Process List${NC}"
echo "Checking processes in vulnerable container:"
docker run --rm vuln-weather-app:vulnerable ps aux
echo "☠️  Can see all processes and system information!"

echo ""
echo -e "${RED}VULNERABILITY TEST 4: Network Information${NC}"
echo "Checking network configuration:"
docker run --rm vuln-weather-app:vulnerable ip addr show
echo "☠️  Full network visibility!"

echo ""
echo -e "${RED}VULNERABILITY TEST 5: Sensitive Files Check${NC}"
echo "Checking if sensitive files are copied:"
docker run --rm vuln-weather-app:vulnerable find /app -name "*.env*" -o -name ".git" -o -name "Dockerfile*"
echo "☠️  Sensitive files might be exposed!"

echo ""
echo "=================================================================="
echo -e "${GREEN}2. MITIGATION DEMONSTRATIONS${NC}"
echo "=================================================================="

echo ""
echo -e "${GREEN}MITIGATION 1: Resource Limits${NC}"
echo "Starting containers with resource limits..."
docker run -d --name vuln-limited --memory=256m --cpus=0.5 -p 3001:5173 vuln-weather-app:vulnerable
docker run -d --name secure-limited --memory=256m --cpus=0.5 -p 3002:5173 vuln-weather-app:secure

echo "✅ Containers started with CPU and memory limits"

echo ""
echo -e "${GREEN}MITIGATION 2: Read-only filesystem${NC}"
echo "Testing read-only filesystem protection:"
docker run --rm --read-only vuln-weather-app:secure touch /test.txt 2>&1 || echo "✅ Read-only filesystem prevented file creation"

echo ""
echo -e "${GREEN}MITIGATION 3: Capability dropping${NC}"
echo "Running with dropped capabilities:"
docker run --rm --cap-drop=ALL vuln-weather-app:secure echo "✅ Container running with minimal capabilities"

echo ""
echo -e "${GREEN}MITIGATION 4: Security scanning${NC}"
echo "Scanning images for vulnerabilities..."
if command -v docker &>/dev/null; then
    if docker version --format '{{.Server.Version}}' | grep -E '^(20|2[1-9]|[3-9])' &>/dev/null; then
        echo "Running Docker security scan..."
        docker scout cves vuln-weather-app:vulnerable || echo "⚠️  Install Docker Scout for vulnerability scanning"
    else
        echo "⚠️  Docker Scout requires Docker 20.0 or later"
    fi
fi

echo ""
echo "=================================================================="
echo -e "${YELLOW}3. CLEANUP AND ACCESS INFO${NC}"
echo "=================================================================="

echo ""
echo "Vulnerable app running at: http://localhost:3001"
echo "Secure app running at: http://localhost:3002"
echo ""
echo "To stop and cleanup:"
echo "docker stop vuln-limited secure-limited"
echo "docker rm vuln-limited secure-limited"
echo "docker rmi vuln-weather-app:vulnerable vuln-weather-app:secure"

echo ""
echo -e "${GREEN}Demonstration complete! 🎉${NC}"
echo "Check DOCKER-VULNERABILITIES.md for detailed explanations."
