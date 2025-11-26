import { Link } from 'react-router-dom'
import './TeamCard.css'

export default function TeamCard({ team }) {
  return (
    <Link to={`/team/${team.idTeam}`} state={{ team }} className="team-link">
      <div className="team-card">
        <img src={team.strBadge} alt={team.strTeam} />
        <h3>{team.strTeam}</h3>
      </div>
    </Link>
  )
}