
import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'
import Slider from '../images-slider/Slider'
import './ProductDetails.style.css'
import Button from '../button/Button'
import { CartContext } from '../../context/CartContext'

const ProductDetails = () => {
    const {id} = useParams()
    const products = useContext(ProductsContext)
    console.log('products', products)
    const {addItemToCart}=useContext(CartContext)
    const addProduct = ()=>addItemToCart(products.filter(e=>e.id===Number(id))[0])

    
    
  return (
    <div>
        {products.filter(e=>e.id===Number(id)).map((e)=>{
            return(
                <div className='details-container'>
                    <div className='details'>
                    <h1>{e.brand}</h1>
                    <h2>{e.title}</h2>
                    <p>{e.description}</p>
                    <span className='span'>{e.price}$</span>
                    <Button onClick={addProduct}>Add To Cart</Button>
                    </div>
                    <div className='images'>
                    <Slider  images={e.images}/>
                    </div>
                    
                    
                </div>
            )
        })}
        

    </div>
  )
}

export default ProductDetails