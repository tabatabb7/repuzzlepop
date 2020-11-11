import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS_FROM_SERVER = 'GET_PRODUCTS_FROM_SERVER'
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const REMOVE_PRODUCT_FROM_SERVER = 'REMOVE_PRODUCT_FROM_SERVER'

/**
 * INITIAL STATE
 */
const initialState = {
  products: [],
  shoppingCart: {}
}

/**
 * ACTION CREATORS
 */
const getProductsFromServer = products => ({
  type: GET_PRODUCTS_FROM_SERVER,
  products
})

const addToCart = product => ({
  type: ADD_PRODUCT_TO_CART,
  product
})

const setQuantity = (product, quantity) => ({
  type: SET_QUANTITY,
  product,
  quantity
})

const removeProductFromServer = productId => ({
  type: REMOVE_PRODUCT_FROM_SERVER,
  productId
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
      return {...state, products: action.products}

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
