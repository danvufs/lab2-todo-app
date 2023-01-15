// This component renders a single task and its associated buttons 
// for changing the status and removing the task
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

    return ( 
      <div> 
        <hr/>
        <h3>{props.task.description}</h3>
        <div>Id: {props.task.id}</div>
        <div>Status: {props.task.done ? 'Completed' : 'Open'}</div>
        <button onClick={handleStatusClick}>Change Status</button>
        <button onClick={handleRemoveClick}>Remove</button>
      </div> 
    ); 
  } 
    
  export default Task;
