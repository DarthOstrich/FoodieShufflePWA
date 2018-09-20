import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import Results from './components/Results'

class App extends Component {
  state = {
    location: {}
  }
  async componentDidMount() {
    try {
      await navigator.geolocation.getCurrentPosition(position => {
        console.log(position)

        this.setState({ location: {} })
      })
    } catch (error) {
      this.setState({ error })
      throw new Error(error)
    }
  }
  render() {
    const { location } = this.state
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" component={Search} exact />
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
