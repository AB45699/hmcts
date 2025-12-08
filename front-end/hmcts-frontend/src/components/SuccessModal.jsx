import { createPortal } from "react-dom";
import '../successModal.css'; 

function SuccessModal({setIsSuccessModalOpen}) {
    const modalRoot = document.getElementById("success-modal");
   
    return createPortal(
        
        <div className="success-modal-content">Case successfully added!
            <button className="close-success-modal" onClick={()=>setIsSuccessModalOpen(false)}>❌</button>
        </div>,

        modalRoot)
}

export default SuccessModal;