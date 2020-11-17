import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProductDetail from './ProductDetail'
import {fetchSingleProduct} from '../store/singleproduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    try {
      const productId = this.props.match.params.productId
      // console.log('single product this.props.match.params.productId', productId)
      this.props.fetchSingleProduct(productId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const product = this.props.product
    // console.log('this.props ', this.props)
    // console.log('product ', product)

    // if (typeof product === undefined) {
    //   return <h2>Loading...</h2>
    // } else {
    //   return <div>Rendering</div>
    // }
    return (
      <div className="content-wrapper">
        <div className="single-product">
          <ProductDetail product={product} />
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
