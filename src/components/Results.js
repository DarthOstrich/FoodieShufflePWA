import React, { Component } from 'react'

const Loading = () => {
  return <div>Loading...</div>
}

const Result = props => {
  const { restaurant } = props
  const { photos, name, rating, types } = restaurant
  console.log(restaurant)

  const image = photos ? photos[0].getUrl() : null

  return (
    <div>
      <img src={image} alt="" className="center" style={{ maxWidth: '100%' }} />
      <div>
        <h2>{name}</h2>
        <p>{rating}</p>
        <p>Category</p>
        <ul>
          {types.map(type => (
            <li key={type}>{type}</li>
          ))}
        </ul>
      </div>

      <button type="button" className="red center capital">
        Let's Go!
      </button>
      <button className="red center capital" type="button">
        Reshuffle
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
    const num = Math.floor(Math.random() * limit) + 1
    return restaurants[num]
  }
  async componentDidMount() {
    let map
    // let results
    const { google } = window
    const { places } = window.google.maps

    // define location
    const location = new google.maps.LatLng(-33.8617374, 151.2021291)

    // make a fake map...
    let newDiv = document.createElement('div')
    map = new google.maps.Map(newDiv, {
      center: location,
      zoom: 15
    })

    // define the parameters
    const request = {
      location,
      radius: '500',
      type: ['restaurant']
    }
    const service = new places.PlacesService(map)
    try {
      await service.nearbySearch(request, (res, status) => {
        if (status !== 'OK') {
          throw new Error('Server Error')
        }
        const single = this.randomizer(res)
        this.setState({ loading: false, results: res, single: single })
      })
    } catch (error) {
      throw new Error(error)
    }

    // debugger
    // document.getElementById('root').removeChild(document.getElementById('map'))

    // None of this garbage works
    // The following example shows a Find Place request for "Mongolian Grill", using the locationbias parameter to prefer results within 2000 meters of the specified coordinates:
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY
    // const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDRPoz4JUCtwM1pFr8K2t07DbdvoEi33i0`
    // const options = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8'
    //   }
    // }
    // const places = await fetch(url)
    //   .then(res => {
    //     console.log(res)
    //     return res
    //   })
    //   .then(json => {
    //     console.log(json)
    //   })
    //   .catch(err => {
    //     console.error(err)
    //   })
    // this.setState({ result: places, loading: false })
  }
  render() {
    let { single, loading } = this.state
    return (
      <div id="map">
        {loading ? <Loading /> : <Result restaurant={single} />}
      </div>
    )
  }
}

export default Results
