import {useState} from 'react';
import FormModal from './FormModal.jsx';
import SuccessModal from './SuccessModal.jsx';

function AddTask( {setCases}) {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    function handleClick() {
        setIsModalOpen(true);
    }

    return (
        <>
        <button className="add-task-button" type="button" onClick={handleClick}>Add task</button>

        {isModalOpen && 
        <FormModal 
            setIsModalOpen={setIsModalOpen}
            setCases={setCases}
            setIsSuccessModalOpen={setIsSuccessModalOpen}
        />}

        {isSuccessModalOpen && <SuccessModal setIsSuccessModalOpen={setIsSuccessModalOpen}/>}
        </>
    )
}

export default AddTask;