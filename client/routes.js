import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import AllProducts from './components/AllProducts'
import {me} from './store'
import ShoppingCart from './components/ShoppingCart'
import HomePage from './components/HomePage'
import LoginSignup from './components/LoginPage'
import SingleProduct from './components/SingleProduct'
import CheckoutPage from './components/CheckoutPage'
import Confirmation from './components/Confirmation'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route path="/login_signup" component={LoginSignup} />
        <Route path="/shopping_cart" component={ShoppingCart} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/confirmation" component={Confirmation} />
        <Route exact path="/products" component={AllProducts} />
        <Route
          path="/products/:productId"
          render={routeProps => <SingleProduct {...routeProps} />}
        />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
