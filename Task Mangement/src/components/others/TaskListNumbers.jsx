import React from 'react'

const TaskListNumbers = ({data}) => {
 
  return (
     
    <div className='flex mt-10 justify-between gap-5 screen'>
       
        <div className='rounded-xl py-6 px-9 w-[45%]  bg-red-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
           <h3 className='text-xl font-medium'>New Tasks</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%]  bg-blue-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
           <h3 className='text-xl font-medium'>Active</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%]  bg-green-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
           <h3 className='text-xl font-medium'>completed</h3>
        </div>
        <div className='rounded-xl py-6 px-9 w-[45%]  bg-yellow-400'>
           <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
           <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers