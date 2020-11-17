import React from 'react'
import {connect} from 'react-redux'
import ProductDetail from './ProductDetail'
import {fetchSingleProduct} from '../store/singleproduct'
import {addToCart} from '../store/orders'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(product, orderId) {
    // this.props.fetchSingleOrder(orderId)
    this.props.addProductToCart(product, orderId)
  }

  componentDidMount() {
    // try {
    const productId = this.props.match.params.productId
    this.props.fetchSingleProduct(productId)
    // } catch (error) {
    //   console.error(error)
    // }
  }

  render() {
    const product = this.props.product

    console.log('in singleproduct this.props ', this.props)
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
            <ProductDetail
              product={product}
              order={this.props.order}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    product: state.product,
    order: state.order
  }
}
const mapDispatch = dispatch => {
  return {
    fetchSingleProduct: productId => dispatch(fetchSingleProduct(productId)),
    addProductToCart: (product, orderId) =>
      dispatch(addToCart(product, orderId))
  }
}
export default connect(mapState, mapDispatch)(SingleProduct)
