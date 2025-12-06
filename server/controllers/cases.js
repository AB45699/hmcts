const {fetchAllCases} = require("../models/cases.js"); 

exports.getAllCases = async (req, res, next) => {
    const cases = await fetchAllCases();
   
    res.status(200).send({cases})
};
