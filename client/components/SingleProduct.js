import React from 'react'
import {connect} from 'react-redux'hyy
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
        <Link to="/products">Return to All Products</Link>
      </div>
    )
    //
    // if (typeof product === undefined) {
    //   return (<h2>Loading...</h2>)
    // } else {
    //   return (
    //     <div>
    //     Found object.
    //       <div id="single-product">
    //         <ProductDetail key={product.id} product={product} />
    //       </div>
    //       <form>
    //         <label htmlFor="quantity">Quantity: </label>
    //         <input type="number" id="quantity" name="quantity" />
    //         <button type="submit">Add To Cart</button>
    //       </form>
    //       <Link to="/products">Return to All Products</Link>
    //     </div>
    //   )
    // }
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
