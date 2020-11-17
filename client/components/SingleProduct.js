import React from 'react'
import {connect} from 'react-redux'
import ProductDetail from './ProductDetail'
import {fetchSingleProduct} from '../store/singleproduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    try {
      const productId = this.props.match.params.productId
      this.props.fetchSingleProduct(productId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const product = this.props.product
    if (product.length < 1) {
      return (
        <div className="content-wrapper">
          <h2>Loading...</h2>
        </div>
      )
    } else {
      return (
        <div className="content-wrapper">
          <div id="single-product">
            <ProductDetail key={product.id} product={product} />
          </div>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}
const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: productId => dispatch(fetchSingleProduct(productId))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)
