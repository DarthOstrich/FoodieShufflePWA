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

    return [restaurants[num], num]
  }
  reShuffle = () => {
    // slowly remove all the items
    // if zero items, go to page two using the nextPageToken
    this.setState({ loading: true })
    const [single, num] = this.randomizer(this.state.results)
    // debugger
    // somehow this will work...
    const newResults = this.state.results.filter(e => {
      return e !== num
    })
    this.setState({ loading: false, results: newResults, single })
  }
  getResults = async (latitude, longitude, nextPageToken) => {
    const { history } = this.props
    let map
    // let results
    const { google } = window
    const { places } = window.google.maps
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
        const [single, num] = this.randomizer(res)
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
  async componentDidMount() {
    const { latitude, longitude } = this.props.location
    const { nextPageToken } = this.state

    await this.getResults(latitude, longitude, nextPageToken)
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
