import React,{useState,useEffect} from "react";
import {fetchTasks,createTask,deleteTask} from '../services/api';

const TaskList=()=>{
    const [tasks,setTasks]=useState([]);
    const [task,setTask]=useState('');

const loadTasks=async()=>{
    try{
        const{data}=await fetchTasks();
        setTasks(data);
    }catch(error){
        console.error(error);
    }
};
const handleAddTask=async()=>{
    try{
        await createTask(task);
        setTask('');
        loadTasks();
    }catch(error)
    {
        console.error(error);
    }
};
const handleDeleteTask=async()=>{
    try{
        await deleteTask(id);
        loadTasks();
    }
    catch(error)
    {
        console.error(error);
    }
};
useEffect(()=>{
    loadTasks();
},[]);

return(
    <div>
        <h2>TaskList</h2>
        <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleADDTask}>Add Task</button>
        <ul>
            {tasks.map((t)=>(
                <li key={t.id}>
                {t.task}
                <button onClick={()=>handleDeleteTask(t.id)}>Delete</button></li>
           ))}
        </ul>
    </div>
);
};
export default TaskList;