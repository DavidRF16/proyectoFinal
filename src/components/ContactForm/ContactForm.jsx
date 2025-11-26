import { useState } from 'react'
import Button from '../Button/Button'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {sent && <div className="success-message">¡Mensaje enviado con éxito!</div>}
      
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="tu@email.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        rows="6"
        placeholder="Escribe tu mensaje..."
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      
      <Button text="Enviar Mensaje" />
    </form>
  )
}