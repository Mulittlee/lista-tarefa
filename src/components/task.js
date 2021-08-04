import React from 'react';
import {CgClose, CgInfo } from 'react-icons/cg'
import { useHistory } from 'react-router-dom';
import './task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory()

    const handleTaskDetailsClick = () => { 
        history.push(`/${task.title.split("/").join("-")}`)

    }

    return (
        
        <div
            
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {} }
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="button-container">
                <button className="remove-task-button"
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose/>
                </button>
                <button className="info-task-button"
                        onClick={handleTaskDetailsClick}
                >
                    <CgInfo/>
                </button>
            </div>
        </div>

        );
}
 
export default Task;