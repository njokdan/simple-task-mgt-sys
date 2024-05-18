# Task Management API Documentation

This API provides endpoints for managing tasks in a task management system. It supports user authentication using JWT tokens and CRUD operations for tasks.

## Base URL

The base URL for all API endpoints is: `http://localhost:3000/api`

## Authentication

All endpoints, except for user registration and login, require authentication using a JWT token. The token should be included in the `Authorization` header of the request.

Example:
Authorization: Bearer <token>

## Endpoints

### Tasks

#### Create a Task

- **Endpoint**: `/tasks`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }

  Response:
    Status Code: 201 Created
    Response Body:
    {
        "_id": "60a8b9e9c7d63c2c6c9e5d8b",
        "title": "Task Title",
        "description": "Task Description",
        "completed": false,
        "user": "60a8b9e9c7d63c2c6c9e5d8a",
        "createdAt": "2021-05-21T12:34:56.789Z",
        "updatedAt": "2021-05-21T12:34:56.789Z"
    }

Get All Tasks
    Endpoint: /tasks
    Method: GET
    Response:
        Status Code: 200 OK
        Response Body:
            [
                {
                    "_id": "60a8b9e9c7d63c2c6c9e5d8b",
                    "title": "Task 1",
                    "description": "Task Description 1",
                    "completed": false,
                    "user": "60a8b9e9c7d63c2c6c9e5d8a",
                    "createdAt": "2021-05-21T12:34:56.789Z",
                    "updatedAt": "2021-05-21T12:34:56.789Z"
                },
                {
                    "_id": "60a8b9e9c7d63c2c6c9e5d8c",
                    "title": "Task 2",
                    "description": "Task Description 2",
                    "completed": true,
                    "user": "60a8b9e9c7d63c2c6c9e5d8a",
                    "createdAt": "2021-05-22T09:12:34.567Z",
                    "updatedAt": "2021-05-23T10:45:12.345Z"
                }
            ]

Get a Task by ID
    Endpoint: /tasks/:id
    Method: GET
    Response:
        Status Code: 200 OK
        Response Body:

        {
            "_id": "60a8b9e9c7d63c2c6c9e5d8b",
            "title": "Task 1",
            "description": "Task Description 1",
            "completed": false,
            "user": "60a8b9e9c7d63c2c6c9e5d8a",
            "createdAt": "2021-05-21T12:34:56.789Z",
            "updatedAt": "2021-05-21T12:34:56.789Z"
        }


Update a Task
Endpoint: /tasks/:id
Method: PUT
Request Body:
json
{
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true
}

Response:
Status Code: 200 OK
Response Body:
json
{
  "_id": "60a8b9e9c7d63c2c6c9e5d8b",
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": true,
  "user": "60a8b9e9c7d63c2c6c9e5d8a",
  "createdAt": "2021-05-21T12:34:56.789Z",
  "updatedAt": "2021-05-24T11:22:33.456Z"
}

Delete a Task
Endpoint: /tasks/:id
Method: DELETE
Response:
Status Code: 200 OK
Response Body:
json
{
  "message": "Task deleted successfully"
}

Error Handling
In case of errors, the API will respond with appropriate HTTP status codes and error messages in the following format:
json
{
  "error": "Error message"
}

Real-time Updates
The API uses Socket.IO to stream real-time updates for task creation, update, and deletion. Clients can connect to the Socket.IO server and listen for the following events:
taskCreated: Emitted when a new task is created.
taskUpdated: Emitted when a task is updated.
taskDeleted: Emitted when a task is deleted.
Each event will emit the corresponding task data as the payload.

This documentation provides an overview of the API endpoints, request/response formats, authentication requirements, and real-time updates using Socket.IO.

With this implementation, you have a fully functional RESTful API for a task management system, complete with user authentication, CRUD operations, data persistence using MongoDB, input validation, and real-time updates using Socket.IO. The code follows best practices, including separation of concerns, modular structure, and proper error handling.

