import React from 'react'
import {Login, Signup} from './index'

const LoginSignup = props => {
  return (
    <div className="content-wrapper">
      <div className="log-in-sign-up-wrapper">
        Already have an account? Log-in:
        <Login />
      </div>
      <div className="log-in-sign-up-wrapper">
        New to Repuzzle? Sign up for an account:
        <Signup />
      </div>
    </div>
  )
}

export default LoginSignup
