const db = require("../connection.js"); 
const format = require("pg-format"); 

async function insertIntoTables(testCasesData) {
    await db.query(
        format(
            `INSERT INTO cases (
                case_number, 
                case_title, 
                case_description, 
                case_status, 
                due) VALUES %L;`, 
            testCasesData.map(({case_number, case_title, case_description, case_status, due})=> [
                case_number, 
                case_title, 
                case_description, 
                case_status, 
                due
            ])

        )
    )

};

module.exports = insertIntoTables;