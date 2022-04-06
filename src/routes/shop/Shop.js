import {useContext} from 'react'
import ProductCard from '../../components/productCard/ProductCard'
import { ProductsContext } from '../../context/ProductsContext'
import './shop.style.css'


const Shop = () => {
  const Products = useContext(ProductsContext)
  return (
    <div className='products-container'>
      {Products.map(product=>{
        return (
          <ProductCard  key={product.id} product={product} />
        )
      })}
    </div>
  )
}

export default Shop