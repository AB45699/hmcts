const express = require("express"); 
const {getAllCases, postCase} = require("./controllers/cases.js");
const {handlePathNotFound, handleCustomErrors} = require("./controllers/errors.js");

const app = express(); 

app.use(express.json());

app.get("/api/cases", getAllCases);

app.post("/api/cases", postCase);

app.all("/*path", handlePathNotFound);

app.use(handleCustomErrors);

module.exports = app;