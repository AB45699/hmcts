const express = require("express"); 
const {getAllCases} = require("./controllers/cases.js");

const app = express(); 

app.get("/api/cases", getAllCases);

module.exports = app;