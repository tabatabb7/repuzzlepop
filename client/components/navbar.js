import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div className="navbar">
    <div id="logo">
      <Link to="/">
        <h1>Repuzzle</h1>
      </Link>
    </div>
    <nav>
      {isLoggedIn ? (
        <div className="menu-item">
          {/* The navbar will show these links after you log in */}
          <Link to="/products">All Products</Link>
          <Link to="/home">Account Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/shopping_cart">
            <img id="shopping-cart" src="/images/shopping-cart.png" />
          </Link>
        </div>
      ) : (
        <div className="menu-item">
          {/* The navbar will show these links before you log in */}
          <Link to="/products">All Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/shopping_cart">
            <img id="shopping-cart" src="/images/shopping-cart.png" />
          </Link>
        </div>
      )}
    </nav>
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
