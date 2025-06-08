// Write your code here
import './index.css'

const LatestMatch = props => {
  const {updatedDataDetails} = props
  const {latestMatchDetails} = updatedDataDetails
 // console.log(latestMatchDetails)
 // console.log(latestMatchDetails.man_of_the_match)

  return (
    <div className="latest-matches-container">
      <div className="team-location-logo-container">
        <div className="team-location-status-container">
          <p className="competing-team">{latestMatchDetails.competingTeam}</p>
          <p className="match-date">{latestMatchDetails.date}</p>
          <p className="match-details-information">
            {latestMatchDetails.venue}
          </p>
          <p className="match-details-information">
            {latestMatchDetails.result}
          </p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={`latest match ${latestMatchDetails.competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <hr className="separator" />
      <div className="team-indetailed-details-container">
        <h1 className="match-details">First Innings</h1>
        <p className="match-details-information">
          {latestMatchDetails.firstInnings}
        </p>
        <h1 className="match-details">second Innings</h1>
        <p className="match-details-information">
          {latestMatchDetails.secondInnings}
        </p>
        <h1 className="match-details">Man Of The Match</h1>
        <p className="match-details-information">
          {latestMatchDetails.manOfTheMatch}
        </p>
        <h1 className="match-details">Umpires</h1>
        <p className="match-details-information">
          {latestMatchDetails.umpires}
        </p>
      </div>
    </div>
  )
}

export default LatestMatch
