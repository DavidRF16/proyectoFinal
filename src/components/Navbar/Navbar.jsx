import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Lowiss App</h1>
        <div className="links">
          <NavLink to="/" className="link">Equipos</NavLink>
          <NavLink to="/profile" className="link">Perfil</NavLink>
          <NavLink to="/contact" className="link">Contacto</NavLink>
          <NavLink to="/about" className="link">About Us</NavLink>
        </div>
      </div>
    </nav>
  )
}