import React from 'react'
import ProductDetail from './ProductDetail'
import {fetchProducts, addToCart} from '../store/products'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(product, orderId) {
    this.props.addProductToCart(product, orderId)
  }

  componentDidMount() {
    // console.log('Mounted')
    this.props.getProducts()
  }

  render() {
    const {products} = this.props.products

    return (
      <div>
        <h2>All Products</h2>
        <div className="products">
          {products.length < 1
            ? 'No Products'
            : products.map(product => (
                <ProductDetail
                  key={product.id}
                  product={product}
                  handleClick={this.handleClick}
                />
              ))}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  addProductToCart: (product, orderId) => dispatch(addToCart(product, orderId))
})

export default connect(mapState, mapDispatch)(AllProducts)
