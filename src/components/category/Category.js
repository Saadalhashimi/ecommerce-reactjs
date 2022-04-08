import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import Button from '../button/Button'
import './Category.style.css'

const Category = () => {
    const products = useContext(ProductsContext)
    const {category}=useParams()

    const productsFiltered = products.filter(product=>product.category===category)
    console.log('productsFiltered', productsFiltered)
 
  return (
    <div className='items-wrapper'>
        {productsFiltered.map((item,i)=>{
            return(
                <div className='item-wrapper' key={i}>
                    <img src={item.images[0]}  alt={item.title}/>
                    <h1>{item.title}</h1>
                    <p>{item.price}$</p>
                    <Button>Add to Cart</Button>
                </div>
            )
        })}
    </div>
  )
}

export default Category