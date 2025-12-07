import { createPortal } from 'react-dom'; 

function FormModal() {
    const modalRoot = document.getElementById("modal-root"); 

    return createPortal(
    <div className="modal-backdrop">
        <div className="modal-content">Modal</div>
    </div>, 
    modalRoot);
}

export default FormModal;