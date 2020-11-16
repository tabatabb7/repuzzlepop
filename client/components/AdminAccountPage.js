import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
// import Navbar from './Navbar'
// import Footer from './Footer'
import {fetchProducts} from '../store/products'
import {fetchAllUsers} from '../store/users'

export class AdminAccountPage extends React.Component {
  // const {firstName} = props
  // console.log('admin account user ', user)
  componentDidMount() {
    this.props.getProducts()
    this.props.getAllUsers()
  }

  render() {
    const users = this.props.users

    console.log('admin account props', this.props)
    const products = this.props.products.products

    console.log('admin account products', products)

    return (
      <div id="admin-account">
        <h1>Admin Account Page</h1>
        <div className="content-wrapper">
          <div id="all-users">
            <h2>All Users</h2>
            {users.length < 1
              ? 'No Users'
              : users.map(user => (
                  <div key={user.id}>
                    {user.firstName} {user.lastName} {user.email}{' '}
                  </div>
                ))}
          </div>
          <div id="all-products">
            <h2>All Products</h2>
            {products.length < 1
              ? 'No Products'
              : products.map(product => (
                  <div key={product.id}>
                    {product.name}{' '}
                    <Link to={`/products/${product.id}`}>Product Info</Link>
                  </div>
                ))}
          </div>
        </div>
      </div>
    )
  }
}

// export default AdminAccountPage

const mapState = state => ({
  products: state.products,
  users: state.users
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  getAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mapState, mapDispatch)(AdminAccountPage)

// export class AdminAccountPage extends React.Compenent {

//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {
//     // get all users
//     // get all products
//     this.props.getAllUsers()
//     this.props.getProducts()
//   }

//   render() {
//     // placeholder

//     const users = this.props.users
//     const products = this.props.products

//     console.log('admin account users = ', users)
//     console.log('admin account products = ', products)

//     return (
//       <div>
//         <div>
//           <Navbar />
//         </div>
//         {/* <div className="users-info">
//           <h3>All User Info</h3>
//           <div className="users">
//             {users.length < 1
//               ? 'No Users'
//               : users.map(user => (
//                   <div key={user.id} className="user-child">
//                     {user.firstName} {user.lastName}
//                     <h5>
//                       {user.firstName} {user.lastName}
//                     </h5>
//                     <h5>{user.email}</h5>
//                     <NavLink to={`/users/${user.id}`}>
//                       <button className="user-page-button" type="button">
//                         Link to User Page
//                       </button>
//                     </NavLink>
//                   </div>
//                 ))}
//                 {products.length < 1
//               ? 'No Products'
//               : products.map(product => (
//                   <div key={product.id} className="product-child">
//                     {product.name}
//                     <NavLink to={`/product/${product.id}`}>
//                       <button className="user-page-button" type="button">
//                         View Product Info
//                       </button>
//                     </NavLink>
//                   </div>
//                 ))}
//           </div>
//         </div>
//         <div>
//           <h3>Products</h3>
//           <div className="products">
//             {products.length < 1
//               ? 'No Products'
//               : products.map(product => (
//                   <div key={product.id} className="product-child">
//                     <h5>{product.name}</h5>

//                     <NavLink to={`/products/${product.id}`}>
//                       <button className="edit-product-button" type="button">
//                         Edit Product
//                       </button>
//                     </NavLink>
//                     <button className="delete-product-button" type="button">
//                       Delete Product
//                     </button>
//                   </div>
//                 ))}
//           </div>
//         </div> */}
//         <div>
//           <Footer />
//         </div>
//       </div>
//     )
//   }
// }

// export default connect(mapState, mapDispatch)(AdminAccountPage)
