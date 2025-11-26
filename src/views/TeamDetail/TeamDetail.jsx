import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PlayerCard from '../../components/PlayerCard/PlayerCard'
import Button from '../../components/Button/Button'
import './TeamDetail.css'

export default function TeamDetail() {
  const { state } = useLocation()
  const team = state?.team
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!team) return
    axios.get(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${team.idTeam}`)
      .then(res => setPlayers((res.data.player || []).map(p => ({
        idPlayer: p.idPlayer,
        strPlayer: p.strPlayer,
        strPosition: p.strPosition || 'Jugador',
        strCutout: p.strCutout || p.strThumb || 'https://via.placeholder.com/200x280/333/fff?text=' + (p.strPlayer?.[0] || '?')
      }))))
      .finally(() => setLoading(false))
  }, [team])

  if (!team) return <div className="text-3xl pt-40">Equipo no encontrado</div>

  return (
    <div className="team-detail-page">
      <div className="team-header">
        <img src={team.strBadge} alt={team.strTeam} className="team-logo" />
        <h1>{team.strTeam}</h1>
        <p className="team-info">
          {team.strStadium} • Fundado en {team.intFormedYear}
        </p>
      </div>

      <h2 className="section-title">
        Plantilla {players.length > 0 && `(${players.length} jugadores)`}
      </h2>

      {loading ? (
        <p className="text-xl">Cargando jugadores...</p>
      ) : players.length > 0 ? (
        <div className="players-grid">
          {players.map(p => <PlayerCard key={p.idPlayer} player={p} />)}
        </div>
      ) : (
        <p className="text-xl text-gray-300">No hay jugadores disponibles</p>
      )}

      <div className="back-button">
        <Link to="/"><Button text="Volver a Equipos" /></Link>
      </div>
    </div>
  )
}