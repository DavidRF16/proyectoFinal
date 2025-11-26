import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contacto</h1>
        <p className="subtitle">¡Escríbenos y te responderemos lo antes posible!</p>
        <ContactForm />
      </div>
    </div>
  )
}