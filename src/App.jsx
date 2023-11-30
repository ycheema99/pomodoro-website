import React from 'react';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TaskApp from './TaskApp';
import Alert from '@mui/material/Alert';


function App() {

  //starter task data 
  const exampleTasks = [
    {
      id: uuidv4(),
      name: "code",
      pomodoros: [{ time: 15 }, { time: 20 }, { time: 20 }, { time: 20 }, { time: 10 }, { time: 20 }, { time: 20 }, { time: 20 }, { time: 20 }, { time: 20 }, { time: 10 }, { time: 20 }]
    },
    {
      id: uuidv4(),
      name: "read",
      pomodoros: [{ time: 10 }, { time: 30 }, { time: 15 }]
    }
  ];



  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from localStorage or set default
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : exampleTasks;
  });

  useEffect(() => {
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [sessionComplete, setSessionComplete] = useState(false);


  return (
    <div className="App">
      {sessionComplete ? <Alert icon={false} style={{ backgroundColor: '#C66875', color: 'white' }} onClose={() => { setSessionComplete(false) }}>Time is up! — good job &#128516;</Alert> : null}

      <TaskApp tasks={tasks} setTasks={setTasks} setSessionComplete={setSessionComplete} />

    </div>
  );
}

export default App;
