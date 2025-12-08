import { createPortal } from 'react-dom'; 
import { useState } from 'react';
import '../modal.css';
import { postCaseData } from '../../api';

function FormModal( {setIsModalOpen, cases, setCases} ) {
    const modalRoot = document.getElementById("modal-root"); 
    const [formData, setFormData] = useState({
        case_number: "",
        case_title: "",
        case_description: "",
        case_status: "",
        due: ""
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
    };

    const postCase = async (newCase) => {
        try {
            await postCaseData(newCase);
            setCases((currCases) => {
                return [newCase, ...currCases]
            })
        } catch (err) {
            throw err
        }
    }

    async function onSubmit(event) {
        event.preventDefault();
        await postCase(formData);
        closeModal();

    }

    return createPortal(
    <div className="modal-backdrop">
        <div className="modal-content"> 
            

            <form onSubmit={onSubmit}> 
                <label htmlFor="case-number-input">Case number: </label>
                <input 
                    name="case_number" 
                    id="case-number-input" 
                    type="text" 
                    value={formData.case_number} 
                    onChange={handleChange}/>

                <label htmlFor="case-title-input">Title: </label>
                <input 
                    name="case_title" 
                    id="case-title-input" 
                    type="text" 
                    value={formData.case_title} 
                    onChange={handleChange}/>
                
                <label htmlFor="case-desc-input">Description: </label>
                <input 
                    name="case_description" 
                    id="case-desc-input" 
                    type="text" 
                    value={formData.case_description} 
                    onChange={handleChange}/>

                <label htmlFor="case-status-input">Status: </label>
                <input 
                    name="case_status" 
                    id="case-status-input" 
                    type="text" 
                    value={formData.case_status} 
                    onChange={handleChange}/>
                
                <label htmlFor="case-due-input">Due date and time: </label>
                <input 
                    name="due" 
                    id="case-due-input" 
                    type="text" 
                    placeholder="YYYY-MM-DD HH:MM:SS"
                    value={formData.due} 
                    onChange={handleChange}/>

                <button className="submit-button" type="submit" onClick={onSubmit}>Submit</button>

            </form>
            <button className="close-modal" type="button" onClick={closeModal}>Close</button>
            
        </div>
    </div>, 
    modalRoot);
}

export default FormModal;
