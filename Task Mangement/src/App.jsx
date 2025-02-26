import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
   const [user, setUser] = useState(null);
   const [loggedInUserData, setloggedInUserData] = useState(null)
   const {userData} = useContext(AuthContext)
  

   


   useEffect(()=>{
    
      const loggedInUser = localStorage.getItem("loggedInUser")
  

    if(loggedInUser){
       const userLog = JSON.parse(loggedInUser)
       setUser(userLog.role);
       setloggedInUserData(userLog.data)
    }

   },[])
   
 
   
   const handleLogin = (email,password)=>{
    if(userData && userData.admin?.find((e)=> e.email === email && e.password === password)){
      const admin = userData.admin?.find((e)=> e.email === email && e.password === password)
      console.log(admin)
      setUser('admin')
      setloggedInUserData(admin)
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin',data : admin}))
    }else if(userData){
      const employee = userData.employees?.find((e)=> e.email === email && e.password === password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee' ,data : employee}))
      }
    
    }else{
      alert('Invalid Credentials')
    }
   }
   
   

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/> : ""}
     {user == 'admin' ? <AdminDashboard  changeUser ={setUser}  data = {loggedInUserData} /> : ( user == 'employee' ? <EmployeeDashboard changeUser ={setUser}  data= {loggedInUserData}/> : null)}
    {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
