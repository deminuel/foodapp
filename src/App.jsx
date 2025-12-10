import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Payment from './Pages/Payment'

import Home from './Components/Home'
import Login from './Pages/Login'
import Welcome from './Pages/Welcome'
import { AuthProvider } from './Context/AuthContext'



const App = () => {
  return (
   
        <Routes>
    <Route path='/' index element={<Home />}/>
    <Route path='/login' element={<Login />} />
    <Route path='/welcome' element={<Welcome />}/>
    <Route path='/payment' element={<Payment />}/>
    
   </Routes>
   
    
  
   
  )
}

export default App