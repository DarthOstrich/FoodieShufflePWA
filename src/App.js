import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Search from "./components/Search"
import Result from "./components/Result"

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Search} exact />
            <Route path="/results" component={Result} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
