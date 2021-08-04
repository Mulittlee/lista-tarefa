import React, { useState } from 'react';
import "./addTask.css"
import Button from './button'

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputDAta] = useState('')

    const handleInputChage = (e) => {
        setInputDAta(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputDAta('')
    }
    

    return (
        <div className="add-task-container">
            <input
                onChange={ handleInputChage }
                value={ inputData }
                className="add-task-input "
                type="text" />
            <div className="add-task-button-container">
                <Button onClick={ handleAddTaskClick }>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;