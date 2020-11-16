import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {AdminAccountPage} from './AdminAccountPage'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, isAdmin} = props

  console.log('props in userhome', props)

  if (isAdmin === true) {
    return (
      <div>
        <h3>Welcome {firstName}</h3>
        <AdminAccountPage user={user} />
      </div>
    )
  } else {
    return (
      <div>
        <h3>Welcome {firstName}</h3>
        {/*UserAccountPage*/}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // email: state.user.email,
    user: state.user,
    firstName: state.user.firstName,
    isAdmin: state.user.isAdmin
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  isAdmin: PropTypes.string
}
