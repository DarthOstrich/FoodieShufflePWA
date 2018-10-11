import React, { Component } from 'react'
import Result from './Result'

// const Loading = () => {
//   return <div>Loading...</div>
// }

class Results extends Component {
  state = {
    results: {},
    single: {},
    nextPageToken: null,
    loading: true,
    error: null
  }
  randomizer(restaurants) {
    const limit = restaurants.length
    const num = Math.floor(Math.random() * limit)
    console.log(num)

    return restaurants[num]
  }
  reShuffle = () => {
    this.setState({ loading: true })
    const single = this.randomizer(this.state.results)
    this.setState({ loading: false, single })
  }
  async componentDidMount() {
    const { history } = this.props
    const { nextPageToken } = this.state
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
      zoom: 10
    })

    // define the parameters
    // other options https://developers.google.com/places/web-service/search
    // minprice maxprice

    const request = {
      location,
      radius: '1500',
      opennow: true,
      minPrice: 2,
      type: ['restaurant'],
      pagetoken: nextPageToken ? nextPageToken : null
    }
    const service = new places.PlacesService(map)
    try {
      await service.nearbySearch(request, (res, status, next_page_token) => {
        if (status !== 'OK') {
          // throw new Error('Server Error')
          history.push('/')
          return
        }
        const single = this.randomizer(res)
        this.setState({
          loading: false,
          results: res,
          single: single,
          nextPageToken: next_page_token
        })
      })
    } catch (error) {
      history.push('/')
      throw new Error(error)
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
