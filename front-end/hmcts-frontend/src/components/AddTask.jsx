import {useState} from 'react';

function AddTask() {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    function handleClick() {
        setIsModalOpen(true);
    }

    return (
        <button className="add-task-button" type="button" onClick={handleClick}>Add task</button>
    )
}

export default AddTask;