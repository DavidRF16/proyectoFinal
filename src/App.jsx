import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import TeamDetail from './views/TeamDetail/TeamDetail'
import Profile from './views/Profile/Profile'
import Contact from './views/Contact/Contact'
import About from './views/About/About'
import './App.css'

function App() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga')
      .then(res => {
        const data = res.data.teams || []
        setTeams(data.map(t => ({
          idTeam: t.idTeam,
          strTeam: t.strTeam,
          strBadge: t.strBadge,
          strStadium: t.strStadium || 'Estadio no disponible',
          intFormedYear: t.intFormedYear || 'N/A'
        })))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          {loading ? (
            <div className="loading">
              <h1>Cargando La Liga...</h1>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home teams={teams} />} />
              <Route path="/team/:id" element={<TeamDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          )}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App