import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleOrder} from '../store/orders'

export class CheckoutPage extends React.Component {
  componentDidMount() {
    this.props.getSingleOrder()
  }

  render() {
    return (
      <div className="content-wrapper">
        <h1>Thank you for your order!</h1>
        <h2>Order #:{/*Cart Mumber*/}</h2>
        <h2>Items in Cart:</h2>
      </div>
    )
  }
}

const mapState = state => ({
  order: state.order
})

const mapDispatch = dispatch => ({
  getSingleOrder: orderId => dispatch(fetchSingleOrder(orderId))
})

export default connect(mapState, mapDispatch)(CheckoutPage)

{
  /* <div id="checkout-page">
        <h2>List of Items: </h2>
        {products.map(product => (
          <div key="orderlist">
            <table>
              <tr>
                <th>{product.name}</th>
                <th>{product.resellPrice}</th>
              </tr>
            </table>
            <form>
              <label htmlFor="quantity">Quantity: </label>
              <input type="number" id="quantity" name="quantity" />
              <button type="submit">Remove Item</button>
            </form>
          </div>
        ))}


      </div>
      </div> */
}

//table with flexbox
// <div key={product.id}>
//             <div class="row">
//               <div class="column">{product.name}</div>
//               <div class="column">
//                 <NavLink to={`/products/${product.id}`}>
//                   Product Info
//                 </NavLink>
//               </div>
//             </div>
//           </div>
