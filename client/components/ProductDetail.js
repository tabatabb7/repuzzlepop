import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const ProductDetail = product => {
  // console.log('this.props.products.products ', this.props.products.products)
  // console.log('this.props.products ', this.props.products)
  // console.log('products ', products)

  // console.log('product = ', product)
  // console.log('product = ', product.product.name)

  // ternary in here for initial render

  return (
    <div className="product-detail-wrapper">
      <div key={product.product.id} className="product-child">
        <a href="/products/1">
          {/* <Link to={`/products/${product.product.id}`}> */}
          <div key={product.product.id}>
            <div className="product-name">{product.product.name}</div>
            <div className="product-img">
              <img src={product.product.image} />
            </div>
            <div className="product-orig-price">
              Original Price: {product.product.origPrice}
            </div>
            <div className="product-resell-price">
              Sale Price: {product.product.resellPrice}
            </div>
            <div className="product-description">
              {product.product.description}
            </div>
            <div className="product-rating">
              Rating: {product.product.rating}
            </div>
          </div>
          {/* </Link> */}
        </a>
        <button className="add-to-cart-button" type="button">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
