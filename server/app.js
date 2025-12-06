const express = require("express"); 
const {getAllCases} = require("./controllers/cases.js");

const app = express(); 

app.get("/api/cases", getAllCases);

app.all("/*path", (req, res, next)=>{
    res.status(404).send({msg: "Path not found"})
})

module.exports = app;