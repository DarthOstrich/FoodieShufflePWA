import React, { Component } from 'react'

const Loading = () => {
  return <div>Loading...</div>
}

const Result = props => {
  return (
    <div>
      <h1>Results page</h1>
      <img src="http://via.placeholder.com/400x150" alt="" className="center" />
      <div>
        <h2>Restaurant Title</h2>
        <p>Stars</p>
        <p>Category</p>
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
    result: {},
    loading: true,
    error: null
  }
  async componentDidMount() {
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
    let { result, loading } = this.state
    return <div>{loading ? <Loading /> : <Result resturant={result} />}</div>
  }
}

export default Results
