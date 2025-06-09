// Write your code here
import {Link} from 'react-router-dom'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import gradientColors from '../../gradientColors'

import TeamPieChart from '../TeamPieChart'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getEachIplTeamData()
  }

  getEachIplTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    //   console.log(data)

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachRecentMatch => ({
        umpires: eachRecentMatch.umpires,
        result: eachRecentMatch.result,
        manOfTheMatch: eachRecentMatch.man_of_the_match,
        id: eachRecentMatch.id,
        date: eachRecentMatch.date,
        venue: eachRecentMatch.venue,
        competingTeam: eachRecentMatch.competing_team,
        competingTeamLogo: eachRecentMatch.competing_team_logo,
        firstInnings: eachRecentMatch.first_innings,
        secondInnings: eachRecentMatch.second_innings,
        matchStatus: eachRecentMatch.match_status,
      })),
    }
    this.setState({
      teamData: updatedData,
      isLoading: false,
    })
  }

  renderIplTeamDetails = () => {
    const {teamData} = this.state
    //   console.log(teamData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    //  console.log(recentMatches)
    //  console.log(latestMatchDetails)
    return (
      <div className="team-matches-bg-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <div className="latest-heading-back-container">
          <h1 className="latest-matches-heading">Latest Matches</h1>
          <Link to="/">
            <button type="button" className="back-btn">
              Back
            </button>
          </Link>
        </div>
        <LatestMatch updatedDataDetails={teamData} />
        <ul className="recent-matches-container">
          {recentMatches.map(match => (
            <li key={match.id}>
              <MatchCard matchCardDetails={match} />
            </li>
          ))}
        </ul>
        <div className="pie-chart-container">
          <TeamPieChart teamData={teamData} />
        </div>
      </div>
    )
  }

  render() {
    const {isLoading, teamData} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    const backgroundStyle = {
      backgroundImage: `${
        gradientColors[id] || 'linear-gradient(to right, #ffffff, #000000)'
      }`,
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'Center',
      alignItems: 'Center',
    }

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div style={backgroundStyle}>{this.renderIplTeamDetails()}</div>
          </>
        )}
      </>
    )
  }
}

export default TeamMatches
