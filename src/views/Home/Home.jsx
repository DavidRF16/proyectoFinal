import TeamCard from '../../components/TeamCard/TeamCard'
import './Home.css'

export default function Home({ teams }) {
  return (
    <div className="home-container">
      <h1 className="home-title">Equipos de La Liga 2025-26</h1>
      <div className="teams-grid">
        {teams.map(team => (
          <TeamCard key={team.idTeam} team={team} />
        ))}
      </div>
    </div>
  )
}