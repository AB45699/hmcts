const db = require("../database/connection.js");

exports.fetchAllCases = async () => {
    const {rows: cases} = await db.query(`SELECT * FROM cases ORDER BY case_id DESC;`);

    return cases;
};

exports.insertCase = async (case_number, case_title, case_description, case_status, due) => {
    const {rows: [postedCase]} = await db.query(`INSERT INTO cases (
        case_number, 
        case_title, 
        case_description, 
        case_status, 
        due) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [case_number, case_title, case_description, case_status, due]);

        return postedCase
};