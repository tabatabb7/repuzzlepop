import axios from 'axios'

const GET_ALL_USERS = 'GET_ALL_USERS'

export const getAllUsers = users => ({type: GET_ALL_USERS, users})

export const fetchAllUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getAllUsers(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = []

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
