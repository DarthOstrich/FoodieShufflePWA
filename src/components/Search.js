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
        <footer style={{ textAlign: 'center', padding: '40px' }}>
          <h4 style={{ marginBottom: '20px' }}>
            Want to help support development of this app?
          </h4>
          <a href="https://www.buymeacoffee.com/AXwyIxz1C" target="_blank">
            <img
              src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png"
              alt="Buy Me A Coffee"
              style={{
                height: 'auto !important',
                width: 'auto',
                textAlign: 'center'
              }}
            />
          </a>
          {/* <h4 style={{ marginBottom: '20px' }}>Have a feature suggestion?</h4> */}
        </footer>
      </div>
    )
  }
}

export default Search
