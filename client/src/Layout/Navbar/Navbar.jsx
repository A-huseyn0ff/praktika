import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [isopen,setIsopen]=useState(false)
const handleopen=()=>{
  if (!isopen) {
    setIsopen(true)
  }
  else{
    setIsopen(false)
  }
}
  return (
    <>
    <nav>
        <div className='nav_container'>
            <h2 className='logo'>
            Floral Studio
            </h2>
            <ul className='nav'>
                <li>
<Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/add'>Add</Link>
                </li>
                <li>
                <Link to='/wishlist'>My wishlist</Link>
                </li>
                <li>
                <Link>Pricing</Link>
                </li>
                <li>
                    <Link>Contacts</Link>
                </li>
            </ul>
<RxHamburgerMenu className='ham' onClick={handleopen}/>

        </div>
        <div className={`${!isopen ? 'submenu' : 'active'} `}>
  <ul className='submenu_nav'>
  <li>
<Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/add'>Add</Link>
                </li>
                <li>
                <Link to='/wishlist'>My wishlist</Link>
                </li>
                <li>
                <Link>Pricing</Link>
                </li>
                <li>
                    <Link>Contacts</Link>
                </li>
  </ul>
</div>
    </nav>
    </>
  )
}

export default Navbar