import React from 'react'
import loader from '../imgs/random-arrows.gif'

const Loading = props => {
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        top: '30%',
        textAlign: 'center'
      }}
    >
      <img
        src={loader}
        alt="Loading"
        style={{ width: '100px', height: 'auto' }}
      />
      <p>Loading...</p>
    </div>
  )
}

export default Loading
