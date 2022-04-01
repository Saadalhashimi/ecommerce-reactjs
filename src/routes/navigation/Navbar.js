

import {Outlet,Link} from 'react-router-dom'
import { Fragment } from 'react'
import {ReactComponent as ShopLogo} from '../../assets/shop-svgrepo-com.svg'


const Navbar = () => {
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
            <Link className='nav-link' to='/signIn'>
            <div>Sign In</div>
            </Link>

          </div>

        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navbar