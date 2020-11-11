import React from 'react'
import {NavLink} from 'react-router-dom'

const ProductDetail = product => {
  return (
    <div className="product-detail-wrapper">
      <div key={product.id} className="product-child">
        <NavLink to={`/products/${product.id}`}>
          <div key={product.id}>
            <div className="product-name">{product.name}</div>
            <div className="product-img">
              <img src={product.image} />
            </div>
            <div className="product-orig-price">{product.origPrice}</div>
            <div className="product-resell-price">{product.resellPrice}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-rating">{product.rating}</div>
          </div>
        </NavLink>
        <button
          className="add-to-cart-button"
          type="button"
          //   onClick={() => this.handleDelete(student.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
