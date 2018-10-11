import React from 'react'
import loader from '../imgs/random-arrows.gif'

const Loading = props => {
  return (
    <div>
      <img
        src={loader}
        alt="Loading"
        style={{ position: 'absolute', width: '100px', height: 'auto' }}
      />
    </div>
  )
}

export default Loading
