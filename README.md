# DTS Developer Technical Test

### Description of project:
A full-stack web application that allows users to create new tasks. The page displays the current task list. 

### Tech stack:

**Front-end**: JavaScript, HTML, CSS, React (vite), Axios.

**Back-end**: JavaScript, Express, Supertest, PostgreSQL, node-postgres.

## Project Setup

### Prerequisites
* Ensure port 9090 (for the back-end) is not in use.  

## Running the project

1. Clone the repository
    <br>```git clone https://github.com/AB45699/hmcts.git ```
2. Navigate to the back-end (server) folder and install the dependencies: 
    <br>```cd hmcts/server```
    <br>```npm install```
3. Create the following environment file within ```hmcts/server```:
    <br> Inside ```.env``` put ```PGDATABASE=hmcts_cases_test``` 
4. To create the database, run the command:
    <br>```npm run create-db```
5. To seed the databse, run the command: 
    <br> ```npm run seed```
6. To run the back-end server, run the command: 
    <br>```npm run dev```
    <br> This will start the server on the specified port (localhost:9090)
7. Navigate to the front-end folder and install the dependencies: 
    <br>```cd hmcts/front-end/hmcts-frontend```
    <br>```npm install```
8. To start the front-end server, run the command: 
    <br>```npm run dev```

## Running the test files
1. To run the unit tests for the endpoints/server, navigate to: 
    <br>```cd hmcts/server```
    and run the command: 
    <br>```npm test```
2. To run the unit tests for the backend utility functions, in the same folder, run: 
    <br>```npm run test-utils```

## Available endpoints
The server has two endpoints:
1. GET ```/api/cases```
  * This will return all tasks in the database in descending order of case_id (so in order latest inserted tasks). 

2. POST ```/api/cases``` 
  * This allows posting of a new task. 
  * Example of a payload received: 

  ```json
    {
        case_number: "Case 3", 
        case_title: "Case 3 title", 
        case_description: "Case 3 description", 
        case_status: "Completed", 
        due: "2025-03-20 17:45:00"
    }
  ```
    