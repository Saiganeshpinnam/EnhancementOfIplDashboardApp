import {Component} from 'react'

class TeamPieChart extends Component {
  state = {
    wonCount: 0,
    lostCount: 0,
    drawnCount: 0,
  }

  render() {
    const {teamData} = this.props
    console.log(teamData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    const latestMatchStatus = latestMatchDetails.matchStatus
    const recentMatchStatusList = recentMatches.map(
      eachRecentMatch => eachRecentMatch.matchStatus,
    )
    

    return <h1>team</h1>
  }
}

export default TeamPieChart
