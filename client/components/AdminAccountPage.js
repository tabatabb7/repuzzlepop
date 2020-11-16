import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export class AdminAccountPage extends React.Component {
  render() {
    // placeholder

    const users = []
    const products = []

    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="users-info">
          <h3>All User Info</h3>
          <div className="users">
            {users.length < 1
              ? 'No Users'
              : users.map(user => (
                  <div key={user.id} className="user-child">
                    <h5>
                      {user.firstName} {user.lastName}
                    </h5>
                    <h5>{user.email}</h5>
                    <NavLink to={`/users/${user.id}`}>
                      <button className="user-page-button" type="button">
                        Link to User Page
                      </button>
                    </NavLink>
                  </div>
                ))}
          </div>
        </div>
        <div>
          <h3>Products</h3>
          <div className="products">
            {products.length < 1
              ? 'No Products'
              : products.map(product => (
                  <div key={product.id} className="product-child">
                    <h5>{product.name}</h5>

                    <NavLink to={`/products/${product.id}`}>
                      <button className="edit-product-button" type="button">
                        Edit Product
                      </button>
                    </NavLink>
                    <button className="delete-product-button" type="button">
                      Delete Product
                    </button>
                  </div>
                ))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}
