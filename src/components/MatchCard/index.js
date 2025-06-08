// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props

  return (
    <div className="match-card-container">
      <img
        src={matchCardDetails.competingTeamLogo}
        alt={`competing team ${matchCardDetails.competingTeam}`}
        className="match-card-team-logo"
      />
      <p className="match-card-competing-name">
        {matchCardDetails.competingTeam}
      </p>
      <p className="match-card-result">{matchCardDetails.result}</p>

      {matchCardDetails.matchStatus === 'Won' ? (
        <p className="match-card-won-status">{matchCardDetails.matchStatus}</p>
      ) : (
        <p className="match-card-lost-status">{matchCardDetails.matchStatus}</p>
      )}
    </div>
  )
}

export default MatchCard
