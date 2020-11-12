import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS_FROM_SERVER = 'GET_PRODUCTS_FROM_SERVER'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADD_QUANTITY = 'ADD_QUANTITY'
const SUBTRACT_QUANTITY = 'SUBTRACT_QUANTITY'
const REMOVE_PRODUCT_FROM_SERVER = 'REMOVE_PRODUCT_FROM_SERVER'

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

export const addToCart = products => ({
  type: ADD_PRODUCT_TO_CART,
  products
})

export const removeFromCart = products => ({
  type: REMOVE_FROM_CART,
  products
})

export const addQuantity = products => ({
  type: ADD_QUANTITY,
  products
})

export const subtractQuantity = products => ({
  type: SUBTRACT_QUANTITY,
  products
})

export const removeProductFromServer = products => ({
  type: REMOVE_PRODUCT_FROM_SERVER,
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
    case ADD_PRODUCT_TO_CART:
      return {...state, shoppingCart: {name: action.products}}

    // case REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     shoppingCart:
    //   }

    default:
      return state
  }
}
