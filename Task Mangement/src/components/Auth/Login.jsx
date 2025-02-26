 import React, { useState } from 'react'
 
 const Login = ({handleLogin}) => {
      const [email,setEmail] =useState('');
      const [password ,setPassword] = useState('')
     
      const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password)

        setEmail("")
        setPassword("")
      }

   return (
     <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 rounded-xl  p-20'>
             <form 
             onSubmit={submitHandler}
             className='flex flex-col items-center justify-center'>

                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                type="email" 
                placeholder='Enter your Email'
                className='  border-2 bg-transparent outline-none placeholder:text-gray-400 border-emerald-600 rounded-full px-5 py-3 text-xl'
                
                />
                <input
                 value={password}
                 onChange={(e)=>{
                    setPassword(e.target.value)
                 }}
                 required
                 type="password"
                 placeholder='Enter your password'
                 className='  border-2 bg-transparent outline-none placeholder:text-gray-400 mt-3 border-emerald-600 rounded-full px-5 py-3 text-xl'
                  />
                <button
                 className=' text-white border-none  outline-none placeholder:text-white mt-5 bg-emerald-600 rounded-full px-5 py-3 text-xl'
                >Log In</button>
             </form>
        </div>

     </div>
   )
 }
 
 export default Login