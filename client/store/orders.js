import axios from 'axios'

// ACTION TYPES

const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const GET_TOTAL = 'GET_TOTAL'
const GET_SINGLE_ORDER = 'GET_SINGLE_ORDER'
const ADD_TO_CART = 'ADD_TO_CART'

const initialState = {}
// ACTION CREATOR

export const removeFromCartAction = products => ({
  type: REMOVE_FROM_CART,
  products
})

export const setQuantityAction = products => ({
  type: SET_QUANTITY,
  products
})

export const getTotalAction = product => ({
  type: GET_TOTAL,
  product
})

export const getSingleOrder = order => ({
  type: GET_SINGLE_ORDER,
  order
})
export const addToCartAction = product => ({
  type: ADD_TO_CART,
  product
})

//THUNK CREATORS
export const fetchSingleOrder = orderId => {
  return async dispatch => {
    try {
      const {data: order} = await axios.get('/api/orders/shopping_cart')
      console.log(order.id)
      dispatch(getSingleOrder(order))
    } catch (error) {
      console.error('ERROR fetching single order')
    }
  }
}
export const addToCart = product => {
  return async dispatch => {
    try {
      console.log('before axios')
      const {data: order} = await axios.get('/api/orders/shopping_cart')
      console.log('order', order)
      const idOrder = order[0].id
      console.log('order id', idOrder)
      const orderProduct = await axios.post(
        `/api/orders/${idOrder}/products/${product.id}`,
        product
      )
      const action = addToCartAction(orderProduct)
      dispatch(action)
      // const action = addToCartAction(order)
      // dispatch(action)
    } catch (error) {
      console.error(error)
      console.error('ERROR adding product to cart in thunk!')
    }
  }
}

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_ORDER:
      return action.order
    case ADD_TO_CART:
      return {...state, products: [state.products, action.product]}
    default:
      return state
  }
}
