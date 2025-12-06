const dropTables = require("./queries/dropTables.js"); 
const insertIntoTables = require("./queries/insertIntoTables.js");
const createTables = require("./queries/createTables.js");

async function seed(testCasesData) {
    await dropTables();
    await createTables();
    await insertIntoTables(testCasesData);
};

module.exports = seed; 

