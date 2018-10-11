import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import Results from './components/Results'

class App extends Component {
  state = {
    location: {},
    loading: true
  }
  async componentDidMount() {
    try {
      await navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords
        console.log('coords ready')

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
              <div>Getting Location Data...</div>
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
