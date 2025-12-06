const db = require("../connection.js"); 

async function dropTables() {
    await db.query(`DROP TABLE IF EXISTS cases;`)
}; 

module.exports = dropTables;