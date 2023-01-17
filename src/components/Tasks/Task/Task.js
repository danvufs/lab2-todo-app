/* Version 2 */
import styled from 'styled-components';

//Add the styled components here
const TaskWrapper = styled.div`
  width: 300px;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const TaskDescription = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const TaskId = styled.div`
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  margin-bottom: 10px;
`;

const TaskStatus = styled.div`
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  margin-bottom: 10px;
`;

const TaskButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1em;
`;
// This component renders a single task and its associated buttons
function Task(props) {
  // Callback function to handle when the "Change Status" button is clicked
  const handleStatusClick = () => {
    // Extract the id of the task from the props object
    const id = props.task.id;
    // Call the onStatusChange callback function and pass in the task's id
    props.onStatusChange(id);
  }
  // Callback function to handle when the "Remove" button is clicked
  const handleRemoveClick = () => {
    // Extract the id of the task from the props object
    const id = props.task.id;
    // Call the onTaskRemove callback function and pass in the task's id
    props.onTaskRemove(id);
  }
  // Return the JSX for the task
  return (
    <TaskWrapper>
      <TaskDescription>{props.task.description}</TaskDescription>
      <TaskId>Id: {props.task.id}</TaskId>
      <TaskStatus>Status: {props.task.done ? 'Completed' : 'Open'}</TaskStatus>
      <TaskButton onClick={handleStatusClick}>Change Status</TaskButton>
      <TaskButton onClick={handleRemoveClick}>Remove</TaskButton>
    </TaskWrapper>
  );
}

export default Task;

/* Version 1 */
// // This component renders a single task and its associated buttons 
// // for changing the status and removing the task
// function Task(props) { 
//     // Callback function to handle when the "Change Status" button is clicked
//     const handleStatusClick = () => {
//         // Extract the id of the task from the props object
//         const id = props.task.id;
//         // Call the onStatusChange callback function and pass in the task's id
//         props.onStatusChange(id);
//     }

//     // Callback function to handle when the "Remove" button is clicked
//     const handleRemoveClick = () => {
//         // Extract the id of the task from the props object
//         const id = props.task.id;
//         // Call the onTaskRemove callback function and pass in the task's id
//         props.onTaskRemove(id);
//     }

//     return ( 
//       <div> 
//         <hr/>
//         <h3>{props.task.description}</h3>
//         <div>Id: {props.task.id}</div>
//         <div>Status: {props.task.done ? 'Completed' : 'Open'}</div>
//         <button onClick={handleStatusClick}>Change Status</button>
//         <button onClick={handleRemoveClick}>Remove</button>
//       </div> 
//     ); 
//   } 

//   export default Task;