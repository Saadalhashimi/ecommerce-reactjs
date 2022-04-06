import {useContext} from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-icon.svg'
import { CartContext } from '../../context/CartContext'
import './CartIcon.style.css'

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen} = useContext(CartContext)
    const toggleIsCartOpen = ()=>setIsCartOpen(!isCartOpen)
  return (
    <div className='icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        
    </div>
  )
}

export default CartIcon