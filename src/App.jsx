import {React,useRef,useState} from 'react'
import './App.css'

function App(){

  const [doList,setDoList]=useState([]);
  const [work,setWork]=useState('');
  const [workIndex,setWorkIndex]=useState(null);

  function updateList(){

    //acts as update button  
    if(workIndex !== null){

      setDoList(list=>{
        return list.map((task,index)=>{
          return index === workIndex ? work : task ;
      })
    })
    setWorkIndex(null);
    }

    //acts as a add button - add new work
    else
    {
    setDoList(list=>[...list,work]);
    }
    setWork('');

    }

  function deleteFromList(index){
    setDoList((list)=> list.filter((_,ind)=> ind!=index))
  } 

  function editList(ind){
    setWorkIndex(ind);
    setWork(doList[ind])
  }

  return (
  <>
  <input type="text" className='works' placeholder='Type to add a task' value={work} onChange={e => setWork(e.target.value)} onKeyDown={(e)=>{
    if(e.key==='Enter'){
      updateList();
    }
  }}/>
  <button className='add-btn' disabled={!work.trim()} onClick={updateList}>
    {workIndex === null? 'Add' : 'Update' }
  </button>
  <hr/>
  <div>
    {
    doList.length === 0 ?(
    <p>No Work to be done</p> ):(
      <div>
        {
        doList.map((work,index)=>(
        (
        
        <p className='list' key={index}>
          {work}
        
        <button className='update-btn' onClick={()=>editList(index)}> |=| </button>
        <button className='delete-btn' onClick={()=>deleteFromList(index)}> \_/ </button>
      </p>
      
        )
    ))}
      </div>
  )
}
  </div>
  </>
)
}

export default App;