// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {individualTeamData} = props
  const {name, teamImageUrl, id} = individualTeamData

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="each-team-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
