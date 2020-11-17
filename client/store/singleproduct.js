import axios from 'axios'

const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT'

export const setSingleProduct = product => {
  return {
    type: SET_SINGLE_PRODUCT,
    product
  }
}

export const fetchSingleProduct = productId => {
  return async dispatch => {
    try {
      console.log('fetching single product')
      const {data} = await axios.get(`/api/products/${productId}`)
      console.log('singleproduct: data = ', data)
      dispatch(setSingleProduct(data))
    } catch (err) {
      console.log(err)
    }
  }
}
const initialState = []

export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_PRODUCT:
      return action.product
    default:
      return state
  }
}
