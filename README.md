# Calculator Microservice

## Overview
This project is a simple calculator microservice built using **Node.js** and **Express**. It provides REST API endpoints for basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division

It also uses **Winston** for logging requests and errors.

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (Download from [Node.js official website](https://nodejs.org/))
- **npm** (Node Package Manager, included with Node.js)

---

## Installation Steps
### Step 1: Clone the Repository
```sh
git clone https://github.com/your-username/calculator-microservice.git
cd calculator-microservice
```

### Step 2: Install Dependencies
```sh
npm install
```
This installs required packages like **Express** and **Winston**.

---

## Running the Application
### Step 3: Start the Server
```sh
node server.js
```
The server will run on `http://localhost:3000`.

### Step 4: Test API Endpoints
You can test the API using a web browser, **Postman**, or **cURL**.

#### Addition
```
GET http://localhost:3000/add?num1=10&num2=5
```
Response:
```json
{
  "operation": "addition",
  "result": 15
}
```

#### Subtraction
```
GET http://localhost:3000/subtract?num1=10&num2=5
```
Response:
```json
{
  "operation": "subtraction",
  "result": 5
}
```

#### Multiplication
```
GET http://localhost:3000/multiply?num1=10&num2=5
```
Response:
```json
{
  "operation": "multiplication",
  "result": 50
}
```

#### Division
```
GET http://localhost:3000/divide?num1=10&num2=5
```
Response:
```json
{
  "operation": "division",
  "result": 2
}
```

---

## Logging
The application logs:
- **Requests:** Logged in `combined.log`
- **Errors:** Logged in `error.log`

Example error log:
```sh
Error: Invalid numbers
```

---

## Stopping the Server
To stop the server, press `CTRL + C` in the terminal.

---

## Future Improvements
- Add more mathematical operations
- Implement authentication for secure API usage

---

developed by Cher Supakovit 224051213
