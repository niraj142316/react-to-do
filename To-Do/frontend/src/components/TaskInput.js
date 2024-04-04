import React, { useEffect, useState } from 'react'
import '../stylesheets/input.css';
import axios from 'axios';
import TaskView from './TaskView';

const TaskInput = () => {
  const [newTask, setNewTask]=useState('');
  const [view, setView]=useState(false);  //initialize view false so that no any task will be displayed 
  const [list, setList] = useState([]);

  //fetch the list of data thr. frontend side
  const showTasks = async () => {
    try {
      const { data } =await axios.get('http://localhost:8000/api/todo/show/tasks')
      setList(data);
    } catch (error) {
      console.log(error);
    }
  }
 
  //add new task by post request thr. frontend side
  const addTask = async (e) => {
    try {
      const { add }=await axios.post('http://localhost:8000/api/todo/create/list', {newTask});
      if(add.status===200){
        setNewTask('');
        showTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }

  //re-render the list of data 
  useEffect(() => {
    showTasks();
  },[]);

  return (
    <div className='container'>
      <div className="form">
        <form onSubmit={addTask}>        {/*calling addTask on submit the new task */}
          <div className="form-wrapper">
            <div className="input">
              <input onChange={(e)=> setNewTask(e.target.value)} value={newTask} type="text" className='form-control' placeholder='Add new task' name='newTask' />
            </div>
            <button type='submit' className='btn btn-success'>Add task</button>
          </div>
        </form>
      </div>

      {/* on clicking view task button user able to see the list of data by changing the state of view to true */}
      <button onClick={()=>setView(!view)} className='btn btn-success btnl'>View Task</button>
      {/* view should be true to fetch the list of data */}
       {view && <TaskView  showTasks={showTasks()} list={list} />}
    </div>
  )
}

export default TaskInput
