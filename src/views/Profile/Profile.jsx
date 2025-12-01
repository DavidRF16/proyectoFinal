import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>Perfil de Usuario</h1>
        <div className="profile-card">
          <img 
            src="https://randomuser.me/api/portraits/men/16.jpg" 
            alt="David Romero" 
            className="profile-img"
          />
          <h2>David Romero</h2>
          <p>Davidromerofrias@gmail.com</p>
          <p className="bio">Aficionado del fútbol y sobretodo del geta.</p>
        </div>
      </div>
    </div>
  )
}