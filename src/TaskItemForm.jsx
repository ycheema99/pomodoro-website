import './TaskItemForm.css'
import { useState } from 'react';

import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
export default function TaskItemForm({ setCurrentSession, tasks, setTasks, task }) {

    // State to hold the selected time from the slider
    const [taskTime, setTaskTime] = useState(20);

    const handleSliderChange = (event) => {
        setTaskTime(event.target.value);
    };

    const handleStartClick = () => {
        //since countDownTimer based in seconds but we want minutes, multiply by 60
        setCurrentSession(prevSession => ({ ...prevSession, time: taskTime * 60, taskId: task.id }))
    };


    const handleDeleteClick = () => {
        setTasks(tasks.filter(t => t.id !== task.id));
        console.log("delete button clicked!")
    }



    return (
        <div className="TaskItemForm">
            <div className="TaskFormSlider">
                <Slider defaultValue={taskTime} aria-label="Default" valueLabelDisplay="auto" onChange={handleSliderChange} style={{ width: '150px', color: '#92B6B1' }} />

            </div>

            <div className="TaskFormButtons">
                <div className='startButton'>
                    <Button onClick={handleStartClick} variant="contained" size="small" color="success" style={{ backgroundColor: '#92B6B1', fontSize: '0.9rem', padding: '2px 8px' }}>
                        Start
                    </Button>
                </div>

            </div>

            <div className='deleteButton'>
                <Tooltip title="Delete Task">
                    <DeleteForeverTwoToneIcon onClick={handleDeleteClick} style={{ color: "#788aa3", fontSize: '23px' }} />
                </Tooltip>

            </div>
        </div>
    )



}