import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import logo from '../imgs/foodieLogo.png'

import loader from '../imgs/random-arrows.gif'
import '../css/custom.css'

class Search extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <img src={logo} alt="Foodie Logo" className="center" />
        </header>

        <button type="button" className="red center capital">
          <Link to="/results">Find Food!</Link>
        </button>
      </div>
    )
  }
}

export default Search
