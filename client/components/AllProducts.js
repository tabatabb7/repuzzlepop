import React from 'react'
import ProductDetail from './ProductDetail'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <h2>All Products</h2>
        <div className="products">
          {products.length < 1
            ? 'No Products'
            : products.map(product => (
                <ProductDetail key={product.id} product={product} />
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
  getProducts: () => dispatch(fetchProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
