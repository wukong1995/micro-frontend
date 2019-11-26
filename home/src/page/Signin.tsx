import React from 'react'
import { signin } from '../store/action'
import { connect } from 'react-redux';

class Signin extends React.Component<any, any> {
  $input: any

  updateHash = () => {
    const hash = this.$input.value
    this.props.dispatch(signin(hash))
  }

  getHash = () => {
    console.log(this.props.hash)
  }

  render () {
    return (
      <div>
        请输入hash：<input type="text" ref={ref => this.$input = ref} />
        <button onClick={this.updateHash}>更新hash</button>
        <button onClick={this.getHash}>得到hash</button>
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