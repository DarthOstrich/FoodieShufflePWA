import React, { Component } from "react"
import logo from "../imgs/foodieLogo.png"
import "../css/custom.css"

class Search extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img src={logo} alt="Foodie Logo" className="center " />
        </header>

        <button type="button" className="red center capital">
          Find Food!
        </button>
      </div>
    )
  }
}

export default Search
