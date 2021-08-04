import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from './button'
import './taskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory()
    
    const handleBackButtonClick = () => {
        history.goBack();
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={ handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{ params.tasksTitle }</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores?</p>
            </div>
        </>
      );
}
 
export default TaskDetails;