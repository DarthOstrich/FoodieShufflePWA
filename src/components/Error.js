import React from 'react'
import loader from '../imgs/random-arrows.gif'

const Error = props => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        top: '30%',
        textAlign: 'center'
      }}
    >
      <p>{this.props.error}</p>
    </div>
  )
}

export default Error
