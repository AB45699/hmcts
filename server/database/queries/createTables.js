const db = require("../connection.js"); 

async function createTables() {
    await db.query(`CREATE TABLE cases (
        case_id SERIAL PRIMARY KEY, 
        case_number VARCHAR NOT NULL, 
        case_title VARCHAR NOT NULL, 
        case_description TEXT, 
        case_status VARCHAR NOT NULL, 
        due TIMESTAMP NOT NULL
        );`)
}; 

module.exports = createTables;