import { createPortal } from 'react-dom'; 
import { useState } from 'react';
import '../modal.css';
import { postCaseData } from '../../api';
import checkInputs from '../utility-functions/checkInputs.js';

function FormModal( {setIsModalOpen, setCases, setIsSuccessModalOpen} ) {
    const modalRoot = document.getElementById("modal-root"); 
    const [errors, setErrors] = useState({});

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
            });
            setIsSuccessModalOpen(true);
        } catch (err) {
            throw err
        }
    }

    async function onSubmit(event) {
        event.preventDefault();
        const validationErrors = checkInputs(formData);
        setErrors(validationErrors)
       
        if (Object.keys(validationErrors).length === 0) {
            await postCase(formData);
            closeModal();
        }
        
    };

    return createPortal(
    <div className="modal-backdrop">
        <div className="modal-content"> 
            

            <form handleSubmit={onSubmit}> 
                <label htmlFor="case-number-input">Case number: </label>
                <input 
                    name="case_number" 
                    id="case-number-input" 
                    type="text" 
                    value={formData.case_number} 
                    onChange={handleChange}/>

                {errors.case_number && (<p className="error-message">This field cannot be empty</p>)}

                <label htmlFor="case-title-input">Title: </label>
                <input 
                    name="case_title" 
                    id="case-title-input" 
                    type="text" 
                    value={formData.case_title} 
                    onChange={handleChange}/>
                
                {errors.case_title && (<p className="error-message">This field cannot be empty</p>)}
                
                <label htmlFor="case-desc-input">Description (optional): </label>
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
                
                {errors.case_status && (<p className="error-message">This field cannot be empty</p>)}

                <label htmlFor="case-due-input">Due date and time: </label>
                <input 
                    name="due" 
                    id="case-due-input" 
                    type="text" 
                    placeholder="YYYY-MM-DD HH:MM:SS"
                    value={formData.due} 
                    onChange={handleChange}/>

                {errors.due && (<p className="error-message">Must enter YYYY-MM-DD HH:MM:SS format</p>)}

                <button className="submit-button" type="submit" onClick={onSubmit}>Submit</button>

            </form>
            <button className="close-modal" type="button" onClick={closeModal}>Close</button>
            
        </div>
    </div>, 
    modalRoot);
}

export default FormModal;
