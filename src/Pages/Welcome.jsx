import React from 'react'
import { Link } from 'react-router-dom';


const Welcome = () => {
  return (
    <div className='bg-[url("https://media.istockphoto.com/id/510107751/photo/pizza-slice.webp?a=1&b=1&s=612x612&w=0&k=20&c=tbf9H-IVsty1yqyn5nvOsE5hOW9Gnlt343q9Gua4uec=")] bg-cover bg-center h-screen'>
      <div className='text-[#EEBE1F] flex flex-col justify-center items-center text-[48px] font-bold font-serif gap-5 pt-[240px]'>
        <h1 className='bg-white rounded-md h-[100%]'>Welcome To</h1>
       <div className='flex flex-col bg-white h-18 text-2xl ml-24 shadow-2xl italic text-[40px] font-bold rounded-lg'>
        <h2>Eat </h2>
        <span className='pl-6'>Food</span>
       </div>
      <Link to="/login">
      <button className='bg-white w-[296px] h-[43px] text-black rounded-full text-xl mb-auto outline-blue-400 border-2 border-blue-400'>Get Started</button></Link> 
      </div>
       
    </div>
  )
}

export default Welcome;