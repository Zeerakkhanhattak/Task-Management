import { useState ,useContext} from "react"

import React  from 'react'
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = ({data}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')


  
  const {userData ,setUserData} = useContext(AuthContext);
  

  const submitHandle  = (e)=>{
      e.preventDefault();
      const Task = {
        title,
        description,
        date,
        category,
        active:false,
        newTask:true,
        completed:false,
        failed:false
      };

      const updatedEmployee = userData.employees.map((employee)=>{
        if(employee.firstName == asignTo){
          return {
            ...employee,
            tasks:[...employee.tasks,Task],
            taskCount:{
              ...employee.taskCount,
              newTask : (employee.taskCount.newTask) + 1,
            }
          }
        }
        return employee
      })
      
    
      setUserData((prev)=>({
        ...prev,
        employees :updatedEmployee
      }))
      
      setAsignTo("");
      setCategory('');
      setDate("");
      setDescription('')
      setTitle("")

  }

   


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={submitHandle}  className='flex  flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
        <div> 
            <h3 className='text-sm text-300 mb-0.5'>Task Title</h3>
            <input 
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
            type='text' 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
            placeholder='Make UI design'/> 
        </div>
        <div>
        <h3>Date</h3>
        <input 
        value={date}
        onChange={(e)=> setDate(e.target.value)}
        type="date"
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Asign To</h3>
        <input 
        value={asignTo}
        onChange={(e)=> setAsignTo(e.target.value)}
        type="text" 
        placeholder='employeeName' 
        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
        </div>
        <div>
        <h3>Category</h3>
        <input
         value={category}
         onChange={(e)=> setCategory(e.target.value)}
         type="text" 
         placeholder='Design or Dev'  
         className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
        </div>
        </div>
        
        <div className='w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
        <textarea 
         value={description}
         onChange={(e)=> setDescription(e.target.value)}   
         name=''
         id='' 
         cols="30" 
         rows='10'  
         className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]'></textarea>
        <button className='bg-emerald-500  py-3  hover:bg-emerald-600 px-5  rounded text-sm  mt-4 w-full'>Create Task</button>
        </div>
    </form>
</div>

  )
}

export default CreateTask