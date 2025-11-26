import './PlayerCard.css'

export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img 
        src={player.strCutout} 
        alt={player.strPlayer} 
        className="player-photo"
        onError={(e) => { e.target.src = `https://via.placeholder.com/120x180/333/fff?text=${player.strPlayer.charAt(0)}` }}
      />
      <div className="player-info">
        <h4 className="player-name">{player.strPlayer}</h4>
        <p className="player-position">{player.strPosition}</p>
      </div>
    </div>
  )
}