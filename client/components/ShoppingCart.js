import React from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../store/products'

export class ShoppingCart extends React.Component {
  render() {
    const {products} = this.props.products

    return (
      <div id="shoppingcartview">
        <h2>List of Items:</h2>
        <div id="mappedproducts">
          {products.length < 1
            ? 'No Products In Your Cart'
            : products.map(product => (
                <div key={product.id}>
                  <table>
                    <tr>
                      <th>{product.name}</th>
                      <th>{product.resellPrice}</th>
                    </tr>
                  </table>
                  <form>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" />
                    <button type="submit">Remove Item</button>
                  </form>
                </div>
              ))}
        </div>
        <button type="submit">Go To Checkout</button>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  addProductToCart: product => dispatch(addToCart(product))
})

export default connect(mapState, mapDispatch)(ShoppingCart)
