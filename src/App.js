import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import Results from './components/Results'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" component={Search} exact />
            <Route path="/results" component={Results} />
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App
