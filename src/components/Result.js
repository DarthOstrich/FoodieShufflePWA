import React from 'react'
import placeholder from '../imgs/placeholder.svg'
import star from '../imgs/star.png'

const Result = props => {
  const { restaurant: r } = props
  // console.log(r)
  // const { photos, name, rating, types } = restaurant

  const image = r.photos ? r.photos[0].getUrl() : placeholder

  return (
    <div>
      <div
        style={{
          height: '350px',
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
      <div className="description">
        <h2 className="resturantName">{r.name || 'Name'}</h2>
        <p className="rating">{r.rating || 'Rating'} <img src={star} alt="gold star" width="50"/></p>
      </div>

      <button type="button" className="red center capital">
        Let's Go!
      </button>
    </div>
  )
}

export default Result
