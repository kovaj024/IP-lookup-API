
---

# IP Lookup API Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
4. [Docker and Deployment](#docker-and-deployment)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The IP Lookup API is a Node.js and Express-based RESTful web service that allows users to look up information for specific IP addresses via the [ipwhois.io](https://ipwhois.io/) API and stores the results in a PostgreSQL database. It provides the capability to cache IP lookup results for efficient data retrieval and automatic cache expiration after a set time.

## Project Structure

- `src/` - The source code for the Node.js and Express application.
    - `controllers/` - Controller logic for handling HTTP requests.
    - `models/` - Sequelize model definitions for database tables.
    - `routes/` - Express route definitions.
    - `services/` - Business logic services.
    - `scripts/` - Scripts related to project setup.
- `migrations/` - Sequelize database migration files.
- `config/` - Configuration files for the application.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the project repository:

   ```bash
   git clone git@github.com:kovaj024/IP-lookup-API.git
   cd ip-lookup-api
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Generate the Sequelize configuration file:

   ```bash
   npm run generate-config
   ```

4. Start the application and PostgreSQL database using Docker Compose:

   ```bash
   docker-compose up
   ```

The application should be accessible at [http://localhost:3000](http://localhost:3000).

## Docker and Deployment

The project includes a `Dockerfile` for containerizing the Node.js application. To deploy the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t ip-lookup-api:andrej .
   ```

2. Deploy the Docker container to your chosen environment.

For more advanced deployments, consider container orchestration with tools like Kubernetes or deploying to serverless platforms like AWS Lambda or Google Cloud Functions.

## API Endpoints

The IP Lookup API provides the following endpoints:

- `GET /lookup/:ipAddress`: Lookup information for a specific IP address.
- `GET /cache/:ipAddress`: Retrieve cached information for a specific IP address.
- `DELETE /cache/:ipAddress`: Remove cached information for a specific IP address.

See the API documentation for details on request and response formats.