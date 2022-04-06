import { useContext } from "react"
import Button from "../button/Button"
import CartItem from "../cart-item/CartItem"
import { CartContext } from "../../context/CartContext"
import './CartDropdown.style.css'



const CartDropdown =()=>{
    const {cartItems}= useContext(CartContext)
    return (
        <div  className="dropdown-container">
         { cartItems.length===0&&<span className="message">your cart is empty</span>}  
         <div  className="cart-items">
             {cartItems.map(item=> (
             <CartItem key={item.id} item={item}/>
             ))}
         </div>
         <Button>Go To</Button>
        </div>
    )
}
export default CartDropdown