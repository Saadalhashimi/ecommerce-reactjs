import React from 'react'
import Button from '../button/Button'
import './ProductCard.style.css'
const ProductCard = ({product}) => {
    const {title,price,images}=product
  return (
    <div className='card-container'>
        <img  src={images[0]} alt={title} /> 
        <div className='footer'>
            <span className='title'>{title}</span>
            <span className='price'> {`${price}$`}</span>
        </div>

        <Button buttonType='inverted' >Add To Cart</Button>


    </div>
  )
}

export default ProductCard