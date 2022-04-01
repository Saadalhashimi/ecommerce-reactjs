
import Home from './routes/home/Home'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "./routes/navigation/Navbar";
import SignIn from './routes/sign-in/SignIn'
import './App.css'

const Shop = ()=>{
  return(
    <div>
    <h2>shop component</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/shop' element={<Shop/>}/>
      </Route> 
      </Routes>
    </div>
  )
}

export default App
