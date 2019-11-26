import React from 'react'

const Signup = ({ history }) => {
  return (
    <button onClick={() => {history.push('/signin')}}>去登录页面</button>
  )
}

export default Signup