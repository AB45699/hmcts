const express = require("express"); 
const {getAllCases, postCase} = require("./controllers/cases.js");
const {handlePathNotFound, handleCustomErrors, handleServerErrors} = require("./controllers/errors.js");

const app = express(); 

app.use(express.json());

app.get("/api/cases", getAllCases);

app.post("/api/cases", postCase);

app.all("/*path", handlePathNotFound);

app.use(handleCustomErrors);

app.use(handleServerErrors); 

module.exports = app;