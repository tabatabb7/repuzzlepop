import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export class AllProducts extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <h2>All Products</h2>
        <div className="products">
          {products.length < 1
            ? 'No Products'
            : products.map((product) => (
                <div key={product.id} className="product-child">
                  <NavLink to={`/products/${product.id}`}>
                    <div key={product.id}>
                      <h4>{product.name}</h4>
                      <div className="campus-img">
                        <img src={product.image} />
                      </div>
                      <h5>{product.origPrice}</h5>
                      <h5>{product.resellPrice}</h5>
                      <p>{product.description}</p>
                      <h5>{product.rating}</h5>
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
              ))}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
