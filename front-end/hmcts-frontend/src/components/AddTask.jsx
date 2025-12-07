import {useState} from 'react';
import FormModal from './FormModal.jsx';

function AddTask() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    function handleClick() {
        setIsModalOpen(true);
    }

    return (
        <>
        <button className="add-task-button" type="button" onClick={handleClick}>Add task</button>

        {isModalOpen && 
        <FormModal 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
        />}
        </>
    )
}

export default AddTask;