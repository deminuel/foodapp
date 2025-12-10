import axios from 'axios';
import React, { useEffect, useState } from 'react'


import { FaApple } from 'react-icons/fa6';

import { GrGoogle } from 'react-icons/gr';
import {  useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import Spinner from '../Utils/Spinner';


const Login = () => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  





  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

  

  try {
    const res = await axios.post("https://dummyjson.com/auth/login",{
      username,
      password,
   })
  

   if (res.status === 200 ){
   
    
     console.log(res.data)
     setUser(res.data.firstName)
     setLoading(false)
      navigate("/");
   } else {
    console.log("login failed")
   }

    
  } catch (error) {
    console.error("error", error)
    setLoading(false)
    
  }
}



  
  return (
    <section className='bg-gradient-to-b from-white to-yellow-300 h-screen'>
        <div className='flex flex-col bg-[#EEBE1F] lg:h-[30vh] text-white p-10 gap-3' >
              <div>
            <h1 className='text-[24px] font-bold'>Hey There</h1>
        </div>
        <div className='flex flex-col italic text-[15px] font-bold'> 
            <span>Come on Board to Eat</span>
            <p className='pl-36'>Food</p>
        </div>
        </div>
        
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center items-center text-[#193B2299]'>
          <span className='font-bold text-[20px] '>Log Into Your Account</span>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-[315px] h-[45px] border-2 border-gray-400 rounded-xl indent-3 italic font-bold text-[16px]' type="text"
         placeholder='Username' />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-[315px] h-[45px] border-2 border-gray-400 rounded-xl indent-3 italic font-bold text-[16px]' type="password" placeholder='Password' />
        <p className='font-bold text-[16px] ml-44'>Forgot Password</p>
      
       <button className='italic bg-[#FFC400] text-white font-bold text-[20px] w-[315px] h-[45px] border-2 border-gray-400 rounded-xl '> { loading?<Spinner></Spinner> : "Login"}</button>
       <span className='font-bold text-[16px] text-black'>Don't have an account? sign up</span>
       <div className='flex items-center w-full'>
        <div className='flex-grow w-full border-t border-black'></div>
        < p className='text-center w-full font-bold text-black text-[14px]'>Or Login With</p>
         <div className='flex-grow w-full border-t border-black'></div>
    
       </div>
      <div className='flex gap-3'>
        <GrGoogle className='bg-white size-5' />
        <FaApple className='bg-black text-white size-5'/>
      </div>

        </form>
      
        
    </section>
  )
}

export default Login;