import { useEffect, useReducer, useState } from 'react';
import './App.css'

function reduce(state,action){
  switch(action.to){
    case 'add':
      return [...state,{id:action.payload.id,name:action.payload.name}];
    case 'delete':
      return state.filter(task=> task.id!==action.payload.id);
    case 'update':
        return state.map(task=>
          task.id === action.payload.id ?
          {...task,name:action.payload.name}:
          task
        );
    case 'clear':
      return  state.map(task=>
        task.id === action.payload.id ?
        {...task,clear:true}:
        task
      );
    default:
      return state;    
  }
}

  function init(){
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
export const App = () => {
  const [editId,setEditId] = useState(null);
  const [state,dispatch] = useReducer(reduce,[],init);
  const [task,setTask] = useState('');


  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(state));
  },[state])

const addTask=()=>{
  task.trim() !== '' ? dispatch({to:'add',payload:{id:Date.now(),name:task,clear:false}}):alert('Enter task before submitting');
  setTask('');
}
const editTask=(task)=>{
  setTask(task.name);
  setEditId(task.id);
  
}
const update=()=>{
  dispatch({to:"update",payload:{id:editId,name:task}});
  setTask('');
  setEditId(null);
}
const deleteTask=(taskId)=>{
  dispatch({to:'delete',payload:{id:taskId}})
}
const clearTask = (id)=>{
  dispatch({to:'clear',payload:{id:id}})
}

  return <>
    <div className="container">
      <h3>TASKS : {state.length}</h3>
      <div className="input-sec">

        <input type="text" className="input" value={task}  
        onChange={e=>setTask(e.target.value)} 
        onKeyDown={e=> {if(e.key==='Enter')
        {editId? update() :addTask()}
        }}/>

        <button className="add-btn" onClick={editId ? update :addTask}>
          {editId ? 'Update' : 'Add Task'}
        </button>
      </div>
      <div className="display">
        <ol>
        {
          state.map(task=>(
            <li key={task.id} >

                {task.clear ? <s>{task.name}</s>:task.name}
                <div>
                <button className="update" disabled={task.clear} onClick={()=>editTask(task)}>Edit</button>
                <button className="delete" onClick={()=>deleteTask(task.id)}>\_/</button>
                <button className="clear" disabled={task.clear} onClick={()=>clearTask(task.id)}>X</button>
                </div>
              
                 

            </li>
          ))
        }
        </ol>
      </div>
    </div>
  </>
}
export default App;