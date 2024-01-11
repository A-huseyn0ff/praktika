import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='col1'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
          <form action="">
            <input type="text" placeholder='Your Email'/>
            <button>Send</button>
          </form>
        </div>
        <ul className='col2'>
        About
        <li>About Us</li>
        <li>Our Partners</li>
        <li>Our Services</li>
       


        </ul>
        <ul className='col2'>
        Contact
<li>Contact Us</li>
<li>FAQ Page</li>
<li>About Me</li>
        </ul>
        <ul className='col2'>
          Follow Us
        </ul>
      </div>
    </footer>
  )
}

export default Footer