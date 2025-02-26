import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import Alltask from '../others/Alltask'

const AdminDashboard = ({data,changeUser}) => {

  return (
    <div className='h-screen w-full p-10'>
        <Header data={data} changeUser ={changeUser}/>
        <CreateTask data={data}/>
        <Alltask  data={data}/>
  
    </div>
  )
}

export default AdminDashboard