# Insurance

## Overview
This project is an Insurance application built with TypeScript. It provides a scalable and maintainable structure for developing RESTful APIs.

## Project Structure
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

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
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

### Running the Application
To start the server, run:
```
npm start
```
Import the postman collection and call the examples in the request api

### API Endpoints

#### Public Endpoints
1. **GET `/api/policies/:id`**
   - Retrieves a single policy by its ID, including the full product object.

2. **GET `/api/policies?customerName=<name>`**
   - Retrieves all policies belonging to the specified customer.

#### Authenticated Endpoints (Requires API Key)
1. **POST `/api/policies`**
   - Creates a new policy.
   - Requires the `x-api-key` header.

2. **PUT `/api/policies/:id`**
   - Updates an existing policy by ID.
   - Requires the `x-api-key` header.

3. **DELETE `/api/policies/:id`**
   - Deletes a policy by ID.
   - Requires the `x-api-key` header.

### Authentication
For authenticated endpoints, include the following header in your requests:
```
x-api-key: my-static-api-key
```

### Testing
To run tests, use:
```
npm test
```


### Architecture and Design Decisions
#### 1. **Project Structure**
The project follows a modular structure to ensure scalability and maintainability:

src Folder: Contains all application code, organized into subfolders for controllers, routes, middleware, models, services, and types.
models: Defines TypeScript interfaces for Policy and Product to ensure type safety.
controllers: Implements business logic for handling API requests.
routes: Maps API endpoints to their respective controllers.
middleware: Includes reusable middleware for logging and authentication.
services: (Optional) Can be used for complex business logic or database interactions.


#### 2. **TypeScript**
TypeScript is used to enforce type safety, making the code more robust and easier to maintain. Interfaces (Policy and Product) ensure consistent data structures across the application.

#### 3. **In-Memory Data**
Data is stored in JSON files (`products.json` and `policies.json`) for simplicity. This approach is suitable for prototyping; a database should be used for production.

#### 4. **Authentication**
A static API key (`x-api-key`) is used to secure specific endpoints. This is a simple mechanism for demonstration purposes.For production, consider implementing OAuth, JWT, or other secure authentication methods.

#### 5. **API Design**
The API follows RESTful principles:

Public Endpoints: Allow unauthenticated access to retrieve policies.
Authenticated Endpoints: Require an API key for creating, updating, or deleting policies.

#### 6. **Testing**
Jest is used for unit testing the core business logic. Mock data ensures tests are isolated from external dependencies.

#### 7. **Debugging**
A launch.json file is included for debugging the application in Visual Studio Code.
TypeScript source maps are enabled to allow debugging of .ts files.

#### 8. **Scalability**
The modular design allows for easy addition of new features, such as database integration or additional endpoints.
