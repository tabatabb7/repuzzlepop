import React from 'react'
import {connect} from 'react-redux'

// import {fetchSingleProduct} from '../store/singleproduct'

import {Link} from 'react-router-dom'
import {ProductDetail} from './ProductDetail'
import {fetchSingleProduct} from '../store/singleproduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    try {
      const productId = this.props.match.params.productId
      console.log('single product this.props.match.params.productId', productId)
      this.props.getSingleProduct(productId)
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const product = this.props
    console.log('product ', product)
    return (
      <div>
        {/* <div id="single-product">
            <ProductDetail key={product.id} product={product} />
          </div>
        <form>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" name="quantity" />
          <button type="submit">Add To Cart</button>
        </form>
        <Link to="/products">Return to All Products</Link> */}
      </div>
    )
  }
}
const mapState = state => {
  return {
    product: state.product
  }
}
const mapDispatch = dispatch => {
  return {
    getSingleProduct: productId => dispatch(fetchSingleProduct(productId))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)
