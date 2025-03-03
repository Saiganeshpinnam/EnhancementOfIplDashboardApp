// Write your code here

import {Component} from 'react'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <div className="ipl-icon-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
      </div>
    )
  }
}

export default Home
