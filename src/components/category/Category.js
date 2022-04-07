import React ,{useContext}from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'

const Category = () => {
    const products = useContext(ProductsContext)
    const {category}=useParams()

    const productsFiltered = products.filter(product=>product.category===category)
    console.log('productsFiltered', productsFiltered)
 
  return (
    <div>
        {productsFiltered.map((item,i)=>{
            return(
                <div  key={i}>
                    <h1>{item.title}</h1>
                    <p>{item.price}$</p>
                </div>
            )
        })}
    </div>
  )
}

export default Category