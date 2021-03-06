import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import usersReducer from './users'
import productsReducer from './products'
import singleProductReducer from './singleproduct'
import ordersReducer from './orders'

const reducer = combineReducers({
  user,
  users: usersReducer,
  products: productsReducer,
  product: singleProductReducer,
  order: ordersReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
