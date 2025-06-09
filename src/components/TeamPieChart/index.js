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
    for (let i = 0; i < recentMatchStatusList.length; i++) {
      if (recentMatchStatusList.slice(i, i + 1) == 'Won') {
        this.setState(prevState => ({
          wonCount: prevState.wonCount + 1,
        }))
      } else if (recentMatchStatusList.slice(i, i + 1) == 'Lost') {
        this.setState(prevState => ({
          lostCount: prevState.lostCount + 1,
        }))
      } else {
        this.setState(prevState => ({
          drawnCount: prevState.drawnCount + 1,
        }))
      }
    }
  }

  render() {
    const {wonCount, lostCount, drawnCount} = this.state
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
    //  console.log(data.map(eachData=> eachData.count))
    return (
      <ResponsiveContainer
        width="100%"
        height={300}
        
      >
        <PieChart >
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Won" fill="#303675"></Cell>
            <Cell name="Lost" fill="#266e43"></Cell>
            <Cell name="Drawn" fill="#44631a"></Cell>
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
