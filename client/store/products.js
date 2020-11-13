import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS_FROM_SERVER = 'GET_PRODUCTS_FROM_SERVER'

const REMOVE_PRODUCT_FROM_SERVER = 'REMOVE_PRODUCT_FROM_SERVER'

const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
export const getProductsFromServer = products => ({
  type: GET_PRODUCTS_FROM_SERVER,
  products
})

export const removeProductFromServer = products => ({
  type: REMOVE_PRODUCT_FROM_SERVER,
  products
})
export const addToCartAction = products => ({
  type: ADD_PRODUCT_TO_CART,
  products
})
/**
 * THUNK CREATORS
 */
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      dispatch(getProductsFromServer(products))
    } catch (error) {
      console.error('ERROR fetching products from api!')
    }
  }
}

export const removeProduct = productId => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${productId}`)
      dispatch(removeProductFromServer(productId))
    } catch (error) {
      console.error('ERROR deleting a product from api!')
    }
  }
}
export const addToCart = product => {
  return async dispatch => {
    try {
      const orderProduct = await axios.post('/api/products', product)
      const action = addToCart(orderProduct)
      dispatch(action)
    } catch (error) {
      console.error('ERROR adding product to cart!')
    }
  }
}
/**
 * REDUCER
 */
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_FROM_SERVER:
      return action.products

    case REMOVE_PRODUCT_FROM_SERVER:
      return {
        ...state,
        products: [
          ...state.products.filter(product => product.id !== action.productId)
        ]
      }

    default:
      return state
  }
}
