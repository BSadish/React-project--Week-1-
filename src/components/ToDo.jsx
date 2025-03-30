import React, { useState } from 'react'

const ToDo = () => {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    function buttonhandler(e){
        e.preventDefault()
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };

  return (
    <div className='flex h-screen justify-center items-center flex-col'>
      <form className='flex flex-col gap-3 w-64'>
       
            <input type="text" className='border-2 w-full rounded-[3px] p-1' value={task} onChange={(e)=>setTask(e.target.value) } placeholder='Enter the task you want to add'/>
            <button className='border-2 self-center px-2 py-0.5 rounded-[5px] bg-blue-500 text-white border-black font-bold'
            onClick={buttonhandler}>
                Add Task</button>
       
        
      </form>
      <ul>
      {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={()=> removeTask(index)}> Delete</button></li>
        ))}
       
      </ul>
    </div>
  )
}

export default ToDo
