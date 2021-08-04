import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AddTask from './components/addTask'
import Tasks from './components/tasks'
import Header from './components/header'
import TaskDetails from './components/taskDetails'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar React',
      completed: false,

    },
    {
      id: '2',
      title: 'Procurar emprego',
      completed: true,

    }
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]

    setTasks(newTasks);
   }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => { 
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;

    })
    setTasks(newTasks);
  }
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
   }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path="/"
          exact
          render={() => (
            <>
              
              <AddTask handleTaskAddition={ handleTaskAddition }/>
              <Tasks tasks={tasks} 
              handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
              
            </>
          ) }
        />
        <Route path="/:tasksTitle" exact component={ TaskDetails }/>
      </div>
    </Router>
  );
}
export default App