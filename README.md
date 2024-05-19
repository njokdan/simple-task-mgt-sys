# Task Management API

This is a RESTful API for a simple task management system built with Node.js, Express, and MongoDB. It provides endpoints for user authentication, creating, reading, updating, and deleting tasks.

## Table of Contents

- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
  - [Tasks](#tasks)
    - [Create a Task](#create-a-task)
    - [Get All Tasks](#get-all-tasks)
    - [Get a Task by ID](#get-a-task-by-id)
    - [Update a Task](#update-a-task)
    - [Delete a Task](#delete-a-task)
- [Real-time Updates](#real-time-updates)
- [Error Handling](#error-handling)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/njokdan/simple-task-mgt-sys.git


2. Install dependencies:

   ```bash
   cd task-management-api
   yarn install

3. Set up environment variables by creating a `.env` file in the project root with the following variables:

   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/task-manager
   JWT_SECRET=your-secret-key

4. Start the server:

   ```bash
   npm start

  The API will be running at `http://localhost:3000`.


## Authentication

All endpoints, except for user registration and login, require authentication using a JWT token. The token should be included in the `Authorization` header of the request.

Example:

   ```bash
    Authorization: Bearer <token>

## API Endpoints

### Tasks

### Create a Task

  - Endpoint: `/api/tasks`
  - Method: `POST`
  - Request Body:

    ```json
    {
      "title": "Task Title",
      "description": "Task Description"
    }

  - Response:
    - Status Code: `201 Created`
    - Response Body:

    ```json
    {
      "_id": "60a8b9e9c7d63c2c6c9e5d8b",
      "title": "Task Title",
      "description": "Task Description",
      "completed": false,
      "user": "60a8b9e9c7d63c2c6c9e5d8a",
      "createdAt": "2021-05-21T12:34:56.789Z",
      "updatedAt": "2021-05-21T12:34:56.789Z"
    }

### Get All Tasks
  - Endpoint: `/api/tasks`
  - Method: `GET`
  - Response:
    - Status Code: `200 OK`
    - Response Body:

    ```json
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

### Get a Task by ID
  - Endpoint: `/api/tasks/:id`
  - Method: `GET`
  - Response:
    - Status Code: `200 OK`
    - Response Body:

    ```json
    {
      "_id": "60a8b9e9c7d63c2c6c9e5d8b",
      "title": "Task 1",
      "description": "Task Description 1",
      "completed": false,
      "user": "60a8b9e9c7d63c2c6c9e5d8a",
      "createdAt": "2021-05-21T12:34:56.789Z",
      "updatedAt": "2021-05-21T12:34:56.789Z"
    }

### Update a Task
  - Endpoint: /api/tasks/:id
  - Method: PUT
  - Request Body:

  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
  }

  - Response:
    - Status Code: `200 OK`
    - Response Body:

    ```json
    {
      "_id": "60a8b9e9c7d63c2c6c9e5d8b",
      "title": "Updated Task Title",
      "description": "Updated Task Description",
      "completed": true,
      "user": "60a8b9e9c7d63c2c6c9e5d8a",
      "createdAt": "2021-05-21T12:34:56.789Z",
      "updatedAt": "2021-05-24T11:22:33.456Z"
    }

### Delete a Task
  - Endpoint: /api/tasks/:id
  - Method: DELETE
  - Response:
    - Status Code: 200 OK
    - Response Body:

    ```json
    {
      "message": "Task deleted successfully"
    }

## Real-time Updates
The API uses Socket.IO to stream real-time updates for task creation, update, and deletion. Clients can connect to the Socket.IO server and listen for the following events:
  - `taskCreated`: Emitted when a new task is created.
  - `taskUpdated`: Emitted when a task is updated.
  - `taskDeleted`: Emitted when a task is deleted.
Each event will emit the corresponding task data as the payload.

## Error Handling
In case of errors, the API will respond with appropriate HTTP status codes and error messages in the following format:

```json
{
  "error": "Error message"
}



# The End

