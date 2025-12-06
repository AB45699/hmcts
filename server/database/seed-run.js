const seed = require("./seed.js"); 
const db = require("./connection.js"); 
const testCasesData = require("./data/test-case-data.json"); 

seed(testCasesData).then(()=>{
    db.end();
});