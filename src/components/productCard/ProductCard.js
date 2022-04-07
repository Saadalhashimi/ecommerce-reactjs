import React,{useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../button/Button'
import { CartContext } from '../../context/CartContext'
import './ProductCard.style.css'
const ProductCard = ({product}) => {
  const {title,price,images,id}=product
  const {addItemToCart}=useContext(CartContext);
  const addProductToCart= ()=>addItemToCart(product)
  const navigate = useNavigate()
  const goToDetailsHandler = ()=>{
   navigate(`/details/${id}`)
  }
  return (
    <div className='card-container' key={id}>
        <img  src={images[0]} alt={title}  onClick={goToDetailsHandler}/> 
        <div className='footer'>
            <span className='title'>{title}</span>
            <span className='price'> {`${price}$`}</span>
        </div>

        <Button buttonType='inverted'  onClick={addProductToCart}>Add To Cart</Button>


    </div>
  )
}

export default ProductCard