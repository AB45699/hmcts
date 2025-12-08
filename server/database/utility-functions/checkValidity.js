function checkValidity(case_number, case_title, case_status, due) {
    const fieldsToCheck = [case_number, case_title, case_status, due];
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/

    for (const field of fieldsToCheck) {
        if (typeof field !== "string" || field === "" || !regex.test(due)) {
            return false
        }
    };

    return true 
    
};

module.exports = checkValidity;