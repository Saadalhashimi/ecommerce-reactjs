import './CartItem.style.css'

const CartItem = ({item})=>{
   const {title,images,price ,quantity} =item
    return(
        <div className='item-container'>
        <img src={images[0]}/>
        <div className='item-details'>
        <span>{title}</span>  
        <span>{quantity} X {price}$</span>
        </div>
        </div>
    )
}
export default CartItem