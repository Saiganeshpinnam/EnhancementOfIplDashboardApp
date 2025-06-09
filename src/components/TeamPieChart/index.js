import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import {Component} from 'react'

import './index.css'

class TeamPieChart extends Component {
  state = {
    wonCount: 0,
    lostCount: 0,
    drawnCount: 0,
  }

  componentDidMount() {
    const {teamData} = this.props
    const {wonCount, lostCount, drawnCount} = this.state
    //  console.log(teamData)
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    const latestMatchStatus = latestMatchDetails.matchStatus
    const recentMatchStatusList = recentMatches.map(
      eachRecentMatch => eachRecentMatch.matchStatus,
    )
    //  console.log(recentMatchStatusList)
    let won = 0
    let lost = 0
    let drawn = 0

    recentMatchStatusList.forEach(status => {
      if (status === 'Won') {
        won += 1
      } else if (status === 'Lost') {
        lost += 1
      } else {
        drawn += 1
      }
    })

    this.setState({
      wonCount: won,
      lostCount: lost,
      drawnCount: drawn,
    })
  }

  render() {
    const {wonCount, lostCount, drawnCount} = this.state
    console.log(wonCount)
    console.log(lostCount)
    const data = [
      {
        count: wonCount,
        status: 'Won',
      },
      {
        count: lostCount,
        status: 'Lost',
      },
      {
        count: drawnCount,
        status: 'Drawn',
      },
    ]
   // console.log(data.map(eachData => eachData.count))
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            dataKey="count"
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell name="Won" fill="#303675" />
            <Cell name="Lost" fill="#266e43" />
            <Cell name="Drawn" fill="#44631a" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}

export default TeamPieChart
