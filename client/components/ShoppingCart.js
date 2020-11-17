import React from 'react'
import {connect} from 'react-redux'
import {addToCart, fetchSingleOrder} from '../store/products'

export class ShoppingCart extends React.Component {
  componentDidMount() {
    this.props.fetchSingleOrder(this.props.match.params.orderId)
  }
  render() {
    const {products} = this.props

    console.log('in component products = ', products)

    return (
      <div className="content-wrapper">
        {/* <div id="shoppingcartview">
          <h2>List of Items:</h2>
          <div id="mappedproducts">
            {products.length < 1
              ? 'No Products In Your Cart'
              : products.map(product => (
                  <div key={product.id} className="shopping-cart-item">
                    <div className="row">
                      <div className="column">{product.name}</div>
                      <div className="column">${product.resellPrice}</div>
                      <div className="column">
                        <form>
                          <label htmlFor="quantity" min="1">
                            Quantity:{' '}
                          </label>
                          <input type="number" id="quantity" name="quantity" />
                          <button type="submit">Remove Item</button>
                        </form>
                      </div>
                    </div> */}

        {/* <table>
                    <tr>
                      <th>{product.name}</th>
                      <th>${product.resellPrice}</th>
                    </tr>
                  </table>
                  <form>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" />
                    <button type="submit">Remove Item</button>
                  </form> */}
        {/* </div> */}
        {/* ))} */}
        {/* </div>
          <button type="submit">Go To Checkout</button>
        </div> */}
      </div>
    )
  }
}

const mapState = state => ({
  products: state.order.products
})

const mapDispatch = dispatch => ({
  addProductToCart: product => dispatch(addToCart(product)),
  fetchSingleOrder: id => dispatch(fetchSingleOrder(id))
})

export default connect(mapState, mapDispatch)(ShoppingCart)
