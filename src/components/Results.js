import React, { Component } from 'react'
import placeholder from '../imgs/placeholder.svg'

// const Loading = () => {
//   return <div>Loading...</div>
// }

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

class Results extends Component {
  state = {
    results: {},
    single: {},
    loading: true,
    error: null
  }
  randomizer(restaurants) {
    const limit = restaurants.length
    const num = Math.floor(Math.random() * limit)
    return restaurants[num]
  }
  reShuffle = () => {
    this.setState({ loading: true })
    const single = this.randomizer(this.state.results)
    this.setState({ loading: false, single })
  }
  async componentDidMount() {
    const { history } = this.props
    let map
    // let results
    const { google } = window
    const { places } = window.google.maps
    const { latitude, longitude } = this.props.location

    // define location
    // const location = new google.maps.LatLng(-33.8617374, 151.2021291)
    const location = new google.maps.LatLng(latitude, longitude)

    // make a fake map...
    let newDiv = document.createElement('div')
    map = new google.maps.Map(newDiv, {
      center: location,
      zoom: 15
    })

    // define the parameters
    const request = {
      location,
      radius: '1000',
      type: ['restaurant']
    }
    const service = new places.PlacesService(map)
    try {
      await service.nearbySearch(request, (res, status) => {
        if (status !== 'OK') {
          // throw new Error('Server Error')
          history.push('/')
          return
        }
        const single = this.randomizer(res)
        this.setState({ loading: false, results: res, single: single })
      })
    } catch (error) {
      history.push('/')
      throw new Error(error)
      return
    }
  }
  render() {
    let { single, loading } = this.state
    return (
      <div id="map">
        {<Result restaurant={single} />}
        <button
          className="red center capital"
          type="button"
          onClick={this.reShuffle}
        >
          Reshuffle
        </button>
      </div>
    )
  }
}

export default Results
