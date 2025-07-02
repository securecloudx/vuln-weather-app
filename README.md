# vuln-weather-app

A simple vulnerable by design weather application built for the **SecureCloudX Hackathon**.

## Features

- Fetches current weather data for any city
- Simple and intuitive user interface

- Built with React and Vite for fast development
- Designed to demonstrate common security vulnerabilities in Docker containers

# ![Vulnerable Weather App](../vuln-weather-app/src/assets/site-preview.png)

## Getting Started

### Local Development

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/vuln-weather-app.git
    cd vuln-weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Docker

This application can be run using Docker for easy deployment and development.

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

### Quick Start with Docker

1. **Build the Docker image:**

    ```bash
    docker build -t vuln-weather-app .
    ```

2. **Run the container:**

    ```bash
    docker run -p 5173:5173 vuln-weather-app
    ```

    The app will be available at `http://localhost:5173`

### Docker Compose (Recommended)

If you prefer using Docker Compose, create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  weather-app:
    build: .
    ports:
      - "5173:5173"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
```

Then run:

```bash
docker compose up
```

### Development with Docker

For development with hot reload, you can mount the source code as a volume:

```bash
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules vuln-weather-app
```

### Useful Docker Commands

- **Stop running container**: `docker stop <container-id>`
- **View running containers**: `docker ps`
- **View container logs**: `docker logs <container-id>`
- **Remove container**: `docker rm <container-id>`
- **Remove image**: `docker rmi vuln-weather-app`
- **Clean up unused containers/images**: `docker system prune`

### Docker Compose Commands

- **Start services**: `docker-compose up`
- **Start in background**: `docker-compose up -d`
- **Stop services**: `docker-compose down`
- **View logs**: `docker-compose logs -f`
- **Rebuild and start**: `docker-compose up --build`

## 🚨 Docker Security Vulnerabilities (Educational)

This application is designed with intentional Docker security vulnerabilities for educational and hackathon demonstration purposes.

### Vulnerability Categories

1. **Root User Execution** - Container runs as root (high risk)
2. **Development Server in Production** - Using `npm run dev` instead of production build
3. **Resource Limits** - No CPU/memory constraints
4. **Sensitive File Exposure** - Copying unnecessary files into container
5. **Broad Network Exposure** - Development server accessible from all interfaces

### Security Demonstration

Run the security demonstration script:

```bash
# Make script executable (Linux/macOS)
chmod +x demo-docker-security.sh
./demo-docker-security.sh

# For Windows
bash demo-docker-security.sh
```

### Secure vs Vulnerable Versions

| File | Purpose |
|------|---------|
| `Dockerfile` | Vulnerable version (current) |
| `Dockerfile.secure` | Secured version with mitigations |
| `docker-compose.secure.yml` | Production-ready compose configuration |
| `DOCKER-VULNERABILITIES.md` | Detailed vulnerability analysis |

### Quick Security Comparison

**Vulnerable (Current):**

```bash
docker run -p 5173:5173 vuln-weather-app
```

**Secure Version:**

```bash
docker-compose -f docker-compose.secure.yml up
```

Access both versions:

- Vulnerable: `http://localhost:5173`
- Secure: `http://localhost:3000`

⚠️ **Note:** This is for educational purposes only. Never deploy the vulnerable version in production!

## License

This project is licensed for hackathon use only.
