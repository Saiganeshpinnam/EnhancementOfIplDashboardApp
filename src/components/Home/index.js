// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeamsData: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = response.status
    console.log(statusCode)
    const data = await response.json()
    console.log(data)
    const formattedData = data.teams.map(eachIplTeam => ({
      name: eachIplTeam.name,
      id: eachIplTeam.id,
      teamImageUrl: eachIplTeam.team_image_url,
    }))
    this.setState({
      iplTeamsData: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeamsData, isLoading} = this.state
    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="ipl-icon-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-cards-container">
              {iplTeamsData.map(eachTeamDetails => (
                <TeamCard
                  key={eachTeamDetails.id}
                  individualTeamData={eachTeamDetails}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
