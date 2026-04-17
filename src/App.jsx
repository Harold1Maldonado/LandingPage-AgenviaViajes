import { useEffect, useMemo, useState } from 'react'
import DestinationCard from './components/DestinationCard'
import ExperiencePanel from './components/ExperiencePanel'
import FAQItem from './components/FAQItem'
import ProcessCard from './components/ProcessCard'
import TestimonialCard from './components/TestimonialCard'
import TourCard from './components/TourCard'
import WhatsAppButton from './components/WhatsAppButton'
import { destinations, experiences, faqs, process, testimonials, tours } from './data/index'

const initialForm = {
  name: '',
  email: '',
  city: '',
  dates: '',
  travelers: '2',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Indica tu nombre para poder contactar contigo.'
  }

  if (!values.email.trim()) {
    errors.email = 'El email es obligatorio.'
  } else if (!/^[\w-.]+@[\w-]+\.[A-Za-z]{2,}$/.test(values.email)) {
    errors.email = 'El formato del email no es válido.'
  }

  if (!values.city.trim()) {
    errors.city = 'Necesitamos tu ciudad de salida en España.'
  }

  if (!values.message.trim() || values.message.trim().length < 20) {
    errors.message = 'Cuéntanos un poco más (mínimo 20 caracteres).'
  }

  return errors
}

function getRecommendation(message) {
  if (!message) return 'Te recomendaremos el circuito ideal tras revisar tus preferencias.'
  const text = message.toLowerCase()
  const match = tours.find((tour) => tour.keywords.some((kw) => text.includes(kw)))
  return match
    ? `Recomendación rápida: ${match.name} — ${match.desc}`
    : 'Recomendación rápida: Ruta mixta (ciudad + experiencia auténtica).'
}

export default function App() {
  const [formValues, setFormValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSent, setIsSent] = useState(false)

  const recommendation = useMemo(() => getRecommendation(formValues.message), [formValues.message])

  useEffect(() => {
    if (!isSent) return
    const timer = setTimeout(() => setIsSent(false), 5000)
    return () => clearTimeout(timer)
  }, [isSent])

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(formValues)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSent(false)
      return
    }

    setErrors({})
    setFormValues(initialForm)
    setIsSent(true)
  }

  return (
    <div>
      <a className="skip-link" href="#contenido">
        Saltar al contenido principal
      </a>

      <header className="site-header">
        <div className="container nav">
          <div>
            <p className="brand-kicker">Atlas & Mar</p>
            <h1 className="brand-title">España → Marruecos</h1>
          </div>
          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#destinos">Destinos</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#circuitos">Circuitos</a>
            <a href="#contacto" className="btn btn-small">Reservar</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Marruecos, tan cerca. Tan inolvidable.</p>
            <h2>Una web de agencia premium para convertir visitas en reservas.</h2>
            <p className="hero-text">
              Diseño emocional, estructura comercial y experiencia moderna para captar grupos que quieren descubrir Marruecos con confianza.
            </p>
            <div className="hero-actions">
              <a href="#circuitos" className="btn">Ver experiencias</a>
              <a href="#contacto" className="btn btn-secondary">Solicitar presupuesto</a>
            </div>
            <div className="hero-metrics" aria-label="Métricas destacadas">
              <p><strong>+500</strong> viajeros satisfechos</p>
              <p><strong>4.9/5</strong> valoración media</p>
              <p><strong>100%</strong> acompañamiento en español</p>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">Entre dos mundos</p>
              <h3>Base visual profesional y escalable para una agencia real.</h3>
            </div>
            <p>
              Esta propuesta no solo sirve como MVP: ya integra bloques de confianza, proceso comercial, FAQ, formulario con validaciones y jerarquía visual lista para evolucionar a producción.
            </p>
          </div>
        </section>

        <section id="destinos" className="section section-dark">
          <div className="container">
            <p className="section-kicker">Destinos destacados</p>
            <h3 className="section-title">Lugares que despiertan el deseo de viajar</h3>
            <div className="card-grid destinations-grid">
              {destinations.map((d) => (
                <DestinationCard key={d.name} {...d} />
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="section">
          <div className="container">
            <p className="section-kicker">Experiencias</p>
            <h3 className="section-title">Viaja como quieres vivirlo</h3>
            <div className="card-grid experiences-grid">
              {experiences.map((e) => (
                <ExperiencePanel key={e.title} {...e} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">Cómo funciona</p>
            <h3 className="section-title">Proceso claro para mejorar la conversión</h3>
            <div className="card-grid process-grid">
              {process.map((p) => (
                <ProcessCard key={p.step} {...p} />
              ))}
            </div>
          </div>
        </section>

        <section id="circuitos" className="section">
          <div className="container">
            <p className="section-kicker">Circuitos estrella</p>
            <h3 className="section-title">Nuestros viajes más deseados</h3>
            <div className="card-grid tours-grid">
              {tours.map((t) => (
                <TourCard key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">Testimonios</p>
            <h3 className="section-title">Historias reales de viajeros</h3>
            <div className="card-grid testimonials-grid">
              {testimonials.map((t) => (
                <TestimonialCard key={t.author} {...t} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-layout">
            <div>
              <p className="section-kicker">FAQ</p>
              <h3 className="section-title">Resolvemos dudas frecuentes antes de reservar</h3>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <FAQItem key={f.question} {...f} />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact-section section-dark">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker">Empieza tu viaje hoy</p>
              <h3 className="section-title">Cuéntanos tu viaje ideal y preparamos una propuesta irresistible.</h3>
              <p>
                Rellena el formulario y nos ponemos en contacto contigo en menos de 24 horas.
              </p>
              <p className="recommendation">{recommendation}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Nombre</label>
              <input
                id="name" name="name" type="text" placeholder="Nombre"
                value={formValues.name} onChange={handleFieldChange}
                aria-invalid={Boolean(errors.name)} aria-required="true"
              />
              {errors.name && <p className="field-error">{errors.name}</p>}

              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" placeholder="Email"
                value={formValues.email} onChange={handleFieldChange}
                aria-invalid={Boolean(errors.email)} aria-required="true"
              />
              {errors.email && <p className="field-error">{errors.email}</p>}

              <label htmlFor="city">Ciudad de salida en España</label>
              <input
                id="city" name="city" type="text" placeholder="Ciudad de salida"
                value={formValues.city} onChange={handleFieldChange}
                aria-invalid={Boolean(errors.city)} aria-required="true"
              />
              {errors.city && <p className="field-error">{errors.city}</p>}

              <label htmlFor="dates">Fechas aproximadas</label>
              <input
                id="dates" name="dates" type="text" placeholder="Ej: Octubre 2026"
                value={formValues.dates} onChange={handleFieldChange}
              />

              <label htmlFor="travelers">Número de viajeros</label>
              <select id="travelers" name="travelers" value={formValues.travelers} onChange={handleFieldChange}>
                <option value="2">2 viajeros</option>
                <option value="4">4 viajeros</option>
                <option value="6">6 viajeros</option>
                <option value="8+">8 o más</option>
              </select>

              <label htmlFor="message">¿Qué tipo de viaje buscas?</label>
              <textarea
                id="message" name="message" rows="5"
                placeholder="Cuéntanos tus intereses (cultura, desierto, lujo, etc.)"
                value={formValues.message} onChange={handleFieldChange}
                aria-invalid={Boolean(errors.message)} aria-required="true"
              />
              {errors.message && <p className="field-error">{errors.message}</p>}

              <button type="submit" className="btn">Solicitar mi viaje</button>

              {isSent && (
                <p className="success-message">¡Gracias! Hemos recibido tu solicitud y te responderemos pronto.</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <WhatsAppButton />
    </div>
  )
}
