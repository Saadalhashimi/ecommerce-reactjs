import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import Image from '../Image'

import { ProductsContext } from "../../context/ProductsContext";


const Main = () => {
  const products= useContext(ProductsContext)
  console.log('products from main', products)
    const categories = [...new Set(products.map(product=>{
        return product.category
    }))]

    console.log('categories', categories)

    const navigate = useNavigate()
    const goToCategory = (e)=>{
      console.log('e.target', e.currentTarget.id)
      navigate(`/category/${e.currentTarget.id}`)
     }
   
  return (
      <div className='categories-container'>
    {categories.map((category,i)=>{
        return(<div className='category-container' key ={i}>
              <Image className='background-image' category={category} />
              <div className='category-body' onClick={goToCategory} id={category}>
              <h2>{category.toUpperCase()}</h2>
              <p>Shop Now</p>
          </div>
        
        </div>)
    })}
    </div>
  )
}

export default Main