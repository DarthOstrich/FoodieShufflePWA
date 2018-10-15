import React from 'react'
import placeholder from '../imgs/placeholder.svg'

const Result = props => {
  const { restaurant: r } = props
  // console.log(r)
  // const { photos, name, rating, types } = restaurant

  const image = r.photos ? r.photos[0].getUrl() : placeholder

  return (
    <div>
      <div
        style={{
          height: '400px',
          overflow: 'hidden',
          backgroundImage: `url('${image}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* <img
          src={image}
          alt=""
          className="center"
          style={{ maxWidth: '100%' }}
        /> */}
      </div>
      <div>
        <h2>{r.name || 'Name'}</h2>
        <p>{r.rating || 'Rating'}</p>
        <p>Category</p>
        <ul>
          {r.types ? r.types.map(type => <li key={type}>{type}</li>) : 'Types'}
        </ul>
      </div>

      <button type="button" className="red center capital">
        Let's Go!
      </button>
    </div>
  )
}

export default Result
