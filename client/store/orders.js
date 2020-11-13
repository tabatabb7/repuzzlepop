import axios from 'axios'

// ACTION TYPES

const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const GET_TOTAL = 'GET_TOTAL'

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

//THUNK CREATORS
