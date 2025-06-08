import {Component} from 'react'

class TeamPieChart extends Component {
  state = {
    wonCount: 0,
    lostCount: 0,
    drawnCount: 0,
  }

  render() {
    const {teamData} = this.props
    const {wonCount, lostCount, drawnCount} = this.state
    console.log(teamData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    const latestMatchStatus = latestMatchDetails.matchStatus
    const recentMatchStatusList = recentMatches.map(
      eachRecentMatch => eachRecentMatch.matchStatus 
    )
    for(let i=0; i<recentMatchStatusList.length; i++){
      if(recentMatchStatusList[i] === 'Won'){
        this.setState(prevState =>({
          wonCount : prevState.wonCount + 1
        }))
      }
      else if(recentMatchStatusList[i] === 'Lost'){
        this.setState(prevState =>({
          lostCount : prevState.lostCount + 1
        }))
      }
      else{
        this.setState(prevState =>({
          drawnCount : prevState.drawnCount + 1
        }))
      }
    }
    console.log(wonCount)

    return <h1>team</h1>
  }
}

export default TeamPieChart
