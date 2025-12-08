import { createPortal } from 'react-dom'; 
import { useState } from 'react';
import '../modal.css';

function FormModal( {setIsModalOpen} ) {
    const modalRoot = document.getElementById("modal-root"); 
    const [formData, setFormData] = useState({
        caseNumber: "",
        caseTitle: "",
        caseDescription: "",
        caseStatus: "",
        caseDue: ""
    })

    function closeModal() {
        setIsModalOpen(false);
    };

    function handleChange(event) {
        setFormData((currData) => {
            return {
                ...currData, 
                [event.target.name]: event.target.value
            }
        })
    }

    return createPortal(
    <div className="modal-backdrop">
        <div className="modal-content"> 
            <button type="button" onClick={closeModal}>Close</button>

            <form> 
                <label htmlFor="case-number-input">Case number: </label>
                <input 
                    name="caseNumber" 
                    id="case-number-input" 
                    type="text" 
                    value={formData.caseNumber} 
                    onChange={handleChange}/>

                <label htmlFor="case-title-input">Title: </label>
                <input 
                    name="caseTitle" 
                    id="case-title-input" 
                    type="text" 
                    value={formData.caseTitle} 
                    onChange={handleChange}/>
                
                <label htmlFor="case-desc-input">Description: </label>
                <input 
                    name="caseDescription" 
                    id="case-desc-input" 
                    type="text" 
                    value={formData.caseDescription} 
                    onChange={handleChange}/>

                <label htmlFor="case-status-input">Status: </label>
                <input 
                    name="caseStatus" 
                    id="case-status-input" 
                    type="text" 
                    value={formData.caseStatus} 
                    onChange={handleChange}/>
                
                <label htmlFor="case-due-input">Due date and time: </label>
                <input 
                    name="caseDue" 
                    id="case-due-input" 
                    type="text" 
                    placeholder="YYYY:MM:DD HH:MM:SS"
                    value={formData.caseDue} 
                    onChange={handleChange}/>

            </form>
      
        </div>
    </div>, 
    modalRoot);
}

export default FormModal;
