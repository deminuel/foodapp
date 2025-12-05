import React from 'react'


import { FaApple } from 'react-icons/fa6';

import { GrGoogle } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Login = () => {
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
        
        <form className='flex flex-col gap-2 justify-center items-center text-[#193B2299]'>
          <span className='font-bold text-[20px] '>Log Into Your Account</span>
        <input className='w-[315px] h-[45px] border-2 border-gray-400 rounded-xl indent-3 italic font-bold text-[16px]' type="email"
         placeholder='Email' />
        <input  className='w-[315px] h-[45px] border-2 border-gray-400 rounded-xl indent-3 italic font-bold text-[16px]' type="password" placeholder='Password' />
        <p className='font-bold text-[16px] ml-44'>Forgot Password</p>
       <Link to='/hero'>
       <button className='italic bg-[#FFC400] text-white font-bold text-[20px] w-[315px] h-[45px] border-2 border-gray-400 rounded-xl '>Login</button></Link>
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