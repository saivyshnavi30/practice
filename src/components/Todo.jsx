import { useState } from "react";
function Todo() {
   const [task, setTask] = useState("");
   const [tasks, setTasks] = useState([]);
   const addTask = ()=> {
    if(task.trim()=== "") return;

    setTasks([...tasks,task]);
    setTask("");
   };

   const deleteTask = (index)=> {
    const updated = tasks.filter((_, i)=> i !== index);
    setTasks(updated);
   };
 
   return (
    <div style={{textAlign: "center", marginTop: "100px"}}> 
    <h2>
        Todo App
    </h2>
    <input
    type="text"
    value={task}
    onChange={(e)=> setTask(e.target.value)}
    placeholder="Enter a task"
    />
    <button onClick={addTask}>
        Add</button>
        <ul style={{listStyle: "none", marginTop:"40px"}}>{tasks.map((item, index) => (
            <li key={index} style={{marginBottom:"20px"}}>
                {item}
                <button
                    style={{marginLeft : "20px", color: "red"}}
                    onClick={()=> deleteTask(index)}>
                    </button>
            </li>))}
            </ul>
    </div>
   ) ;
}
export default Todo;