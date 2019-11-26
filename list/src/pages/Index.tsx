import React from 'react'
import { connect } from 'react-redux';

const Index = ({ hash }) => {
  return (
    <div>当前hash： “{hash}”</div>
  )
}

const mapToProps = (state) => {
  return {
    hash: state
  }
}

export default connect(mapToProps)(Index)