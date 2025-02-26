import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5  w-[300px] bg-red-400 rounded-xl">
    <div className="flex justify-between items-center">
       <h3 className="bg-red-600 px-3 text-sm py-1 rounded">{data.category}</h3>
       <h4 className="text-sm">{data.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
    <p className="text-sm mt-2">
       {data.description}
    </p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 px-2 py-1 text-sm'>Mark as Completed</button>
        <button className='bg-red-500 px-2 py-1 text-sm'>Mark as Failed</button>
    </div>
 </div>
  )
}

export default AcceptTask