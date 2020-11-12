import axios from 'axios'

// ACTION TYPES
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_QUANTITY = 'SET_QUANTITY'

// ACTION
export const addToCart = products => ({
  type: ADD_PRODUCT_TO_CART,
  products
})

export const removeFromCart = products => ({
  type: REMOVE_FROM_CART,
  products
})

export const setQuantity = products => ({
  type: SET_QUANTITY,
  products
})
