function CaseCard( {fetchedCase} ) {
    return (
        <div className="case-card">
            <p>{fetchedCase.case_number}</p>
            <p>{fetchedCase.case_title}</p>
            <p>{fetchedCase.case_description}</p>
            <p>{fetchedCase.case_status}</p>
            <p>{fetchedCase.due}</p>
        </div>
        
    )
}

export default CaseCard;