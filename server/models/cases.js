const db = require("../database/connection.js");

exports.fetchAllCases = async () => {
    const {rows: cases} = await db.query(`SELECT * FROM cases;`);

    return cases;
}