# Insurance Application Overview
This project is an Insurance application built with TypeScript. It provides a scalable and maintainable structure for developing RESTful APIs.

# Project Structure
```
insurance
├── src
│   ├── index.ts                       # Main application setup and server startup
│   ├── config                         # Configuration settings
│   ├── controllers                    # Application controllers
│   ├── routes                         # Application routes
│   ├── middleware                     # Middleware functions
│   ├── models                         # Data models
│   └── types                          # TypeScript types and interfaces
├── Insurance.postman_collection.json  # Postman collection
├── jest.config.js                     # Jest configuration
├── package.json                       # Project metadata and dependencies
├── tsconfig.json                      # TypeScript configuration
└── README.md                          # Project documentation
```

# Getting Started

# Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

# Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd insurance
   ```
3. Install the dependencies:
   ```
   npm install
   ```

# Running the Application
To start the server, run:
```
npm start
```
Import the postman collection and call the examples in the request api

# API Endpoints

# Public Endpoints
1. **GET `/api/policies/:id`**
   - Retrieves a single policy by its ID, including the full product object.

2. **GET `/api/policies?customerName=<name>`**
   - Retrieves all policies belonging to the specified customer.

# Authenticated Endpoints (Requires API Key)
1. **POST `/api/policies`**
   - Creates a new policy.
   - Requires the `x-api-key` header.

2. **PUT `/api/policies/:id`**
   - Updates an existing policy by ID.
   - Requires the `x-api-key` header.

3. **DELETE `/api/policies/:id`**
   - Deletes a policy by ID.
   - Requires the `x-api-key` header.

# Authentication
For authenticated endpoints, include the following header in your requests:
```
x-api-key: my-static-api-key
```

# Testing
To run tests, use:
```
npm test
```


# Architecture 
src Folder: Contains all application code, organized into subfolders for controllers, routes, middleware, models, services, and types.
models: Defines TypeScript interfaces for Policy and Product to ensure type safety.
controllers: Implements business logic for handling API requests.
routes: Maps API endpoints to their respective controllers.
middleware: Includes reusable middleware for logging and authentication.
services: (Optional) Can be used for complex business logic or database interactions.
