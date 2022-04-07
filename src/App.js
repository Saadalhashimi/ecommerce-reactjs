
import Home from './routes/home/Home'
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from "./routes/navigation/Navbar";
import Authentication from './routes/authentication/Authentication'
import './App.css'
import Shop from './routes/shop/Shop';
import ProductDetails from './components/product-details/ProductDetails';
import Category from './components/category/Category';

const App = () => {
  return (
    <div>
      <Routes>
       <Route path='/'  element={<Navbar />}>
      <Route index element={<Home />}/>
      <Route path='/auth' element={<Authentication/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/details/:id' element={<ProductDetails/>}/>
      <Route path='/category/:category' element={<Category/>}/>
      </Route> 
      </Routes>
    </div>
  )
}

export default App
