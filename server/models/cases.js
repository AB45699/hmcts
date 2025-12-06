const db = require("../database/connection.js");

exports.fetchAllCases = async () => {
    const {rows: cases} = await db.query(`SELECT * FROM cases ORDER BY case_id DESC;`);

    return cases;
}