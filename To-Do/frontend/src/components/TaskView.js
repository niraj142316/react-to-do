import React from 'react'
import '../stylesheets/view.css';
import axios from 'axios';


const TaskView = ({list}) => {

  //delete request through the frontend
  const deleteTask = async (id) => {
    try {
      const taskDelete =await axios.delete(`http://localhost:8000/api/todo/delete/task/${id}`);
      if(taskDelete.status===200){
      console.log("task deleted");

      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Tasks</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
      <tbody>
        {list &&
          list.map(d => (
            <tr key={d.id}>
              <th scope='row'>{d.id}</th>
              <td>{d.newTask}</td>
              <td>
                <i onClick={()=>deleteTask(d.id)} className='fa-solid fa-trash-can icon'></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TaskView
