import React from 'react'
import { signin } from '../store/action'
import { connect } from 'react-redux';

class Signin extends React.Component<any, any> {
  $input: any

  updateHash = () => {
    const hash = this.$input.value
    this.props.dispatch(signin(hash))
  }

  updateGlobalHash = () => {
    const hash = this.$input.value
    this.props.globalEvent.dispatch(signin(hash))
  }

  render () {
    return (
      <div>
        <div>当前hash: {this.props.hash}</div>
        <div>请输入hash：<input type="text" ref={ref => this.$input = ref} /></div>
        <button onClick={this.updateGlobalHash}>广播更新hash</button>
        <button onClick={this.updateHash}>不广播更新hash</button>
      </div>
    )
  }
}

const mapToProps = (state) => {
  return {
    hash: state
  }
}

export default connect(mapToProps)(Signin)