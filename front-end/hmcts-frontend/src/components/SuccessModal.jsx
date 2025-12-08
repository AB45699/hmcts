import { createPortal } from "react-dom";
import '../successModal.css'; 

function SuccessModal() {
    const modalRoot = document.getElementById("success-modal");
   
    return createPortal(
        <div className="success-modal-backdrop">
        <div className="success-modal-content">Case successfully added!</div>
        </div>, 

        modalRoot)
}

export default SuccessModal;