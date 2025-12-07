function CaseCard( {fetchedCase} ) {
    const due = fetchedCase.due;
    const formattedDue = due.slice(0, 16).replace("T", " ");

    const description = fetchedCase.case_description;

    return (
        <div className="case-card">
            <p> <span>Case number: </span>{fetchedCase.case_number}</p>
            <p><span>Title: </span>{fetchedCase.case_title}</p>
            <p><span>Description: </span> {description === "" ? "No description provided" : description}</p>
            <p><span>Status: </span>{fetchedCase.case_status}</p>
            <p><span>Due: </span>{formattedDue}</p>
        </div>
        
    )
}

export default CaseCard;