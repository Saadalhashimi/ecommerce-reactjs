

import {Outlet,Link} from 'react-router-dom'
import { Fragment ,useContext } from 'react'
import {ReactComponent as ShopLogo} from '../../assets/shop-svgrepo-com.svg'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import { CartContext } from '../../context/CartContext'


const Navbar = () => {
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
          <ShopLogo className='logo'/>
          </Link > 
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            <div>Shop</div>
            </Link>
            <Link className='nav-link' to='/auth'>
            <div>Sign In</div>
            </Link>
              <CartIcon />
          </div>
         {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navbar