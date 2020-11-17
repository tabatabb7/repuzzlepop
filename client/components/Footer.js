import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <ul id="footer-menu">
          <li>
            <Link to="/products">All Products</Link>
          </li>
          <li>
            <Link to="/shopping_cart">Shopping Cart</Link>
          </li>
          <li>© 2020 Corn.pop</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
