# vuln-weather-app

A simple vulnerable by design weather application built for the **SecureCloudX Hackathon**.

## Features

- Fetches current weather data for any city
- Simple and intuitive user interface

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

### Docker Development

1. Build and run the development container:

    ```bash
    docker-compose -f docker-compose.dev.yml up --build
    ```

    The app will be available at `http://localhost:5173`

### Docker Production

1. Build and run the production container:

    ```bash
    docker-compose up --build
    ```

    The app will be available at `http://localhost:3000`

2. Or build and run manually:

    ```bash
    docker build -t vuln-weather-app .
    docker run -p 3000:80 vuln-weather-app
    ```

### Docker Commands

- **Stop containers**: `docker-compose down`
- **View logs**: `docker-compose logs -f`
- **Rebuild**: `docker-compose up --build`

## License

This project is licensed for hackathon use only.
