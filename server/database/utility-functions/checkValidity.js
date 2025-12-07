function checkValidity(case_number, case_title, case_status, due) {
    const fieldsToCheck = [case_number, case_title, case_status, due];

    for (const field of fieldsToCheck) {
        if (typeof field !== "string" || field === "") {
            return false
        }
    };

    return true 
    
};

module.exports = checkValidity;