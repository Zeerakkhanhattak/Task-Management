import React ,{useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'
// import { AuthContext } from '../Context/AuthProvider'
const Alltask = ({data}) => {
   
    const {userData} = useContext(  AuthContext);

    
    

  return (
    <div id="AllTask" className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
          <div  className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                 <h2 className=' w-1/5 text-white'>Employee</h2>
                 <h3 className=' w-1/5 text-white '>New Task</h3>
                 <h5 className='w-1/5 text-white '> Active Task</h5>
                 <h5 className=' w-1/5 text-white '> Completed Task</h5>
                 <h5 className=' w-1/5 text-white '> Failed</h5>
             </div>
         <div className=''>
         {userData.employees.map((elem)=>{
              return <div key={elem.id} className="border-emerald-400-400 mb-2 py-2 px-4 flex justify-between rounded">
                 <h2 className=' text-lg text-medium text-white w-1/5'>{elem.firstName}</h2>
                 <h3 className='text-lg text-medium text-blue-400 !important w-1/5'>{elem.taskCount?.newTask}</h3>
                 <h5 className= 'text-lg text-medium text-yellow-400 !important; w-1/5'>{elem.taskCount.active}</h5>
                 <h5 className= 'text-lg text-medium   w-1/5 text-green-400 !important '> {elem.taskCount.completed}</h5>
                 <h5 className= 'text-lg text-medium text-red-400 !important w-1/5'> {elem.taskCount.failed}</h5>
             </div>
        })}
         </div>
      
        

       
  
    </div>
  )
}

export default Alltask