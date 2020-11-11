import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductDetail from './ProductDetail'

export default class AllProducts extends React.Component {
  render() {
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
