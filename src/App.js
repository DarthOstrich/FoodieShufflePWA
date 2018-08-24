import React, { Component } from "react"
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom"
import Search from "./components/Search"
import Result from "./components/Result"
=======
import Search from "./components/Search"
>>>>>>> Homepage Fixes

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Search} exact />
            <Route path="/results" component={Result} />
          </div>
        </BrowserRouter>
      </div>
=======
      <React.Fragment>
        <Search />
      </React.Fragment>
>>>>>>> Homepage Fixes
    )
  }
}

export default App
