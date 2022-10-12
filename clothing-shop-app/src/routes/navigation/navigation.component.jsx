import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navbar =() => {
    return(
      <Fragment>
      <div>
          <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrownLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
              <Link className='nav-link' to='/signIn'>
                SignIn
              </Link>
            </div>
          </div>
          <Outlet/>
      </div>
      </Fragment>
    )
  }
  

export default Navbar;