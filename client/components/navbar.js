import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <div className="background-overlay">
      <div id="logo">
        <Link to="/">
          <img src="/images/logo-repuzzle.png" />
        </Link>
      </div>
      <nav>
        {isLoggedIn ? (
          <div>
            <ul className="menu-items">
              {/* The navbar will show these links after you log in */}
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/home">Account Home</Link>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </li>
              <li>
                <Link to="/shopping_cart">
                  <img id="shopping-cart" src="/images/shopping-cart.png" />
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="menu-items">
              {/* The navbar will show these links before you log in */}
              <li>
                <Link to="/products">All Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
            <Link to="/shopping_cart">
              <img id="shopping-cart" src="/images/shopping-cart.png" />
            </Link>
          </div>
        )}
      </nav>
    </div>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
