import axios from 'axios'
import history from '../history'

//ACTION TYPES
const ADD_PRODUCT = 'ADD_PRODUCT'
const SET_QUANTITY = 'SET_QUANTITY'

//INITIAL STATE
const shoppingCart = {}

//ACTION CREATOR
const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

const setQuantity = (product, quantity) => ({
  type: SET_QUANTITY,
  product,
  quantity
})
