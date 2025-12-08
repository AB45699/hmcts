function checkInputs(formData) {
    const errors = {};
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/

    if (formData.case_number === "") {
        errors.case_number = true;
    } 
    
    if (formData.case_title === "") {
        errors.case_title = true;
    } 
    
    if (formData.case_status === "") {
        errors.case_status = true;
    }

    if (!regex.test(formData.due)) {
        errors.due = true;
    }

    return errors;
}

export default checkInputs;