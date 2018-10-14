import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import Results from './components/Results'
import Loading from './components/Loading'

class App extends Component {
  state = {
    location: {},
    loading: true
  }
  async componentDidMount() {
    try {
      await navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords
        // console.log('coords ready')
        // debugger

        this.setState({ location: { latitude, longitude }, loading: false })
      })
    } catch (error) {
      this.setState({ error })
      throw new Error(error)
    }
  }
  render() {
    const { location, loading } = this.state
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            {loading ? (
              <Loading />
            ) : (
              <Route path="/" component={Search} exact />
            )}

            <Route
              path="/results"
              render={routeProps => (
                <Results {...routeProps} location={location} />
              )}
            />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
