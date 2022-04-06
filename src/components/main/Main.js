import React,{useContext} from 'react'
import Image from '../Image'

import { ProductsContext } from "../../context/ProductsContext";


const Main = () => {
  const products= useContext(ProductsContext)
  console.log('products from main', products)
    const categories = [...new Set(products.map(product=>{
        return product.category
    }))]
   
  return (
      <div className='categories-container'>
    {categories.map((category,i)=>{
        return(<div className='category-container' key ={i}>
              <Image className='background-image' category={category} />
              <div className='category-body'>
              <h2>{category}</h2>
              <p>Shop Now</p>
          </div>
        
        </div>)
    })}
    </div>
  )
}

export default Main