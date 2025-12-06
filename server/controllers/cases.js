const {fetchAllCases, insertCase} = require("../models/cases.js"); 

exports.getAllCases = async (req, res, next) => {
    const cases = await fetchAllCases();
   
    res.status(200).send({cases})
};

exports.postCase = async (req, res, next) => {
    const {case_number, case_title, case_description, case_status, due} = req.body;
    const postedCase = await insertCase(case_number, case_title, case_description, case_status, due); 

    res.status(201).send({postedCase}); 
}
