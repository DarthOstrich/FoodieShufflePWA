import React, { Component } from "react"

class Result extends Component {
  render() {
    return (
      <div>
        <h1>Results page</h1>
        <img src="http://via.placeholder.com/400x150" alt="" class="center" />
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
}

export default Result
