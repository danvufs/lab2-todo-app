/* Version 2 */
import { useState } from 'react';
import uuid from 'react-uuid';
import Task from './Task/Task';
import styled from 'styled-components';

// creating a styled component for the tasks wrapper, TasksTitle, and ClearButton
const TasksWrapper = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    padding-top: 50px;
    background-color: #f1f1f1;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TasksTitle = styled.h2`
    position: absolute;
    top: 0;
    z-index: 1;
    font-size: 2em;
    font-weight: bold;
    margin: 0;
    padding: 10px;
    align-self: flex-start;
`;

const ClearButton = styled.button`
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 1em;
    align-self: center;
`;


// Tasks component that renders a list of tasks and their associated buttons
function Tasks() {
    // useState hook to manage the tasks state
    const [tasks, setTasks] = useState([
        { id: uuid(), description: 'Walk the dog', done: true },
        { id: uuid(), description: 'Wash the car', done: false },
        { id: uuid(), description: 'Finish the lab', done: false }
    ]);

    // callback function to handle when the "Clear Tasks" button is clicked
    const handleClearTasks = () => {
        setTasks([]);
    }

    // callback function to handle when the "Change Status" button is clicked
    const handleStatusChange = (id) => {
        // create a copy of the tasks array
        const updatedTasks = [...tasks];
        // update the task's status in the copied array
        updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
        // set the tasks state to the updated copied array
        setTasks(updatedTasks);
    }

    // callback function to handle when the "Remove" button is clicked
    const handleTaskRemove = (id) => {
        // filter out the task to be removed and set the tasks state to the filtered array
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    }
    // Return the JSX for the Tasks component
    return (
        <TasksWrapper>
            <TasksTitle>These are the tasks:</TasksTitle>
            {tasks.map((task, index) =>
            (<Task key={index} task={task} onStatusChange={handleStatusChange}
                onTaskRemove={handleTaskRemove} />))}
            <ClearButton onClick={handleClearTasks}>Clear Tasks</ClearButton>
        </TasksWrapper>
    );
}

export default Tasks;

/* Version 1 */
// import { useState } from 'react';
// import uuid from 'react-uuid';
// import Task from './Task/Task';

// // Tasks component that renders a list of tasks and their associated buttons
// function Tasks() {
//     // useState hook to manage the tasks state
//     const [tasks, setTasks] = useState([
//         { id: uuid(), description: 'Walk the dog', done: true },
//         { id: uuid(), description: 'Wash the car', done: false },
//         { id: uuid(), description: 'Finish the lab', done: false }
//     ]);

//     // callback function to handle when the "Clear Tasks" button is clicked
//     const handleClearTasks = () => {
//         setTasks([]);
//     }

//     // callback function to handle when the "Change Status" button is clicked
//     const handleStatusChange = (id) => {
//         // create a copy of the tasks array
//         const updatedTasks = [...tasks];
//         // update the task's status in the copied array
//         updatedTasks.forEach((task) => { if (task.id === id) { task.done = !task.done; } });
//         // set the tasks state to the updated copied array
//         setTasks(updatedTasks);
//     }

//     // callback function to handle when the "Remove" button is clicked
//     const handleTaskRemove = (id) => {
//         // filter out the task to be removed and set the tasks state to the filtered array
//         const filteredTasks = tasks.filter((task) => task.id !== id);
//         setTasks(filteredTasks);
//     }

//     return (
//         <>
//             <h2>These are the tasks:</h2>
//             {/* map over the tasks array and render a Task component for each */}
//             {tasks.map((task, index) =>
//             (<Task key={index} task={task} onStatusChange={handleStatusChange}
//                 onTaskRemove={handleTaskRemove} />))}
//             <hr />
//             <button onClick={handleClearTasks}>Clear Tasks</button>
//         </>
//     );
// }

// export default Tasks;