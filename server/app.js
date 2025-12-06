const express = require("express"); 
const {getAllCases} = require("./controllers/cases.js");
const {handlePathNotFound} = require("./controllers/errors.js");

const app = express(); 

app.get("/api/cases", getAllCases);

app.all("/*path", handlePathNotFound);

module.exports = app;