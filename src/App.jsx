import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import HeroSection from './Components/HeroSection'
import Payment from './Pages/Payment'


const App = () => {
  return (
   <Routes>
    <Route path='/' index element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/Hero' element={<HeroSection />}/>
    <Route path='/payment' element={<Payment />}/>
    
   </Routes>
  )
}

export default App