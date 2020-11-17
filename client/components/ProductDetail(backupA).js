// import React from 'react'
// import {NavLink} from 'react-router-dom'

// const ProductDetail = props => {
//   // console.log('this.props.products.products ', this.props.products.products)
//   // console.log('this.props.products ', this.props.products)
//   // console.log('products ', products)

//   const {handleClick, product} = props

//   return (
//     <div className="product-detail-wrapper">
//       <div key={props.id} className="product-child">
//         <NavLink to={`/products/${product.id}`}>
//           <div key={product.id}>
//             <div className="product-name">{product.name}</div>
//             <div className="product-img">
//               <img src={product.image} />
//             </div>
//             <div className="product-orig-price">
//               Original Price: {product.origPrice}
//             </div>
//             <div className="product-resell-price">
//               Resell Price: {product.resellPrice}
//             </div>
//             <div className="product-description">{product.description}</div>
//             <div className="product-rating">Ratings: {product.rating}</div>
//             <label htmlFor="quantity">Quantity: </label>
//             <input type="number" id="quantity" name="quantity" />
//           </div>
//         </NavLink>
//         <button
//           className="add-to-cart-button"
//           type="button"
//           onClick={handleClick}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ProductDetail
