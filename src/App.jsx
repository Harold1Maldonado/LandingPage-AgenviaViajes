import { useMemo, useState } from 'react'

const destinations = [
  {
    name: 'Marrakech',
    subtitle: 'Color, tradición y energía vibrante',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Ideal para primera visita',
  },
  {
    name: 'Chefchaouen',
    subtitle: 'La ciudad azul más fotogénica',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Ritmo relajado y auténtico',
  },
  {
    name: 'Fez',
    subtitle: 'Historia viva entre callejuelas eternas',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Cultura y artesanía milenaria',
  },
  {
    name: 'Sáhara',
    subtitle: 'Dunas doradas y noches mágicas',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    highlight: 'Aventura inolvidable',
  },
]

const experiences = [
  {
    title: 'Escapadas románticas',
    text: 'Riads con encanto, cenas especiales y atardeceres inolvidables para una experiencia íntima y exclusiva.',
  },
  {
    title: 'Circuitos culturales',
    text: 'Descubre medinas, ciudades imperiales, artesanía y patrimonio con rutas pensadas para viajeros curiosos.',
  },
  {
    title: 'Desierto y aventura',
    text: 'Campamentos bereberes, 4x4, kasbahs y paisajes espectaculares para quienes buscan algo memorable.',
  },
  {
    title: 'Viajes premium',
    text: 'Hoteles selectos, traslados privados y servicios diseñados para viajar con comodidad y estilo.',
  },
]

const tours = [
  {
    name: 'Marrakech Express',
    duration: '4 días',
    price: 'Desde 490 €',
    desc: 'Una escapada elegante entre jardines, zocos, terrazas y riads boutique.',
    includes: 'Vuelo opcional, alojamiento y guía local',
  },
  {
    name: 'Ciudades Imperiales',
    duration: '7 días',
    price: 'Desde 890 €',
    desc: 'Marrakech, Fez, Rabat y Meknes en un circuito cultural con mucho encanto.',
    includes: 'Traslados, media pensión y experiencias culturales',
  },
  {
    name: 'Norte de Marruecos',
    duration: '5 días',
    price: 'Desde 620 €',
    desc: 'Tánger, Tetuán y Chefchaouen con salida cómoda desde el sur de España.',
    includes: 'Ferry, hoteles y ruta con coordinador',
  },
]

const testimonials = [
  {
    quote:
      'Nos sorprendió lo cerca que está Marruecos y lo distinto que se siente. Todo fue precioso y muy bien organizado.',
    author: 'Lucía y Andrés',
  },
  {
    quote:
      'La web transmite exactamente el estilo del viaje: elegante, cálido y muy atractivo.',
    author: 'Carmen V.',
  },
  {
    quote: 'El desierto fue una experiencia brutal. Repetiríamos sin dudarlo.',
    author: 'Javier R.',
  },
]

const process = [
  {
    step: '1',
    title: 'Nos cuentas tu idea',
    text: 'Preferencias, presupuesto y fechas aproximadas para diseñar un viaje realista desde España.',
  },
  {
    step: '2',
    title: 'Diseñamos la propuesta',
    text: 'Recibes un itinerario claro con actividades, hoteles, tiempos y costes transparentes.',
  },
  {
    step: '3',
    title: 'Reserva y acompañamiento',
    text: 'Gestionamos la logística y os acompañamos antes y durante la experiencia.',
  },
]

const faqs = [
  {
    question: '¿Salís desde cualquier ciudad de España?',
    answer: 'Sí. Adaptamos salidas desde Madrid, Barcelona, Valencia, Málaga o sur de España vía ferry.',
  },
  {
    question: '¿Se puede viajar en grupo privado?',
    answer: 'Sí. Organizamos viajes privados para parejas, familias o grupos de amigos con ruta personalizada.',
  },
  {
    question: '¿Qué nivel de comodidad tienen los viajes?',
    answer: 'Tenemos opciones estándar, confort y premium. Siempre te mostramos claramente qué incluye cada propuesta.',
  },
]

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

export default function App() {
  const [formValues, setFormValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSent, setIsSent] = useState(false)

  const selectedTour = useMemo(() => {
    if (!formValues.message) {
      return 'Te recomendaremos el circuito ideal tras revisar tus preferencias.'
    }

    const text = formValues.message.toLowerCase()
    if (text.includes('desierto') || text.includes('aventura')) return 'Recomendación rápida: Desierto y aventura + noche en haima.'
    if (text.includes('cultura') || text.includes('historia')) return 'Recomendación rápida: Ciudades Imperiales con foco cultural.'
    return 'Recomendación rápida: Ruta mixta (ciudad + experiencia auténtica).'
  }, [formValues.message])

  const handleFieldChange = (event) => {
    const { name, value } = event.target

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }))
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
            <a href="#contacto" className="btn btn-small">
              Reservar
            </a>
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
              <a href="#circuitos" className="btn">
                Ver experiencias
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Solicitar presupuesto
              </a>
            </div>
            <div className="hero-metrics" aria-label="Métricas destacadas">
              <p>
                <strong>+500</strong> viajeros satisfechos
              </p>
              <p>
                <strong>4.9/5</strong> valoración media
              </p>
              <p>
                <strong>100%</strong> acompañamiento en español
              </p>
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
              {destinations.map((destination) => (
                <article className="destination-card" key={destination.name}>
                  <img src={destination.image} alt={`Paisaje de ${destination.name}`} loading="lazy" />
                  <div className="destination-card__content">
                    <h4>{destination.name}</h4>
                    <p>{destination.subtitle}</p>
                    <span>{destination.highlight}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="section">
          <div className="container">
            <p className="section-kicker">Experiencias</p>
            <h3 className="section-title">Viaja como quieres vivirlo</h3>
            <div className="card-grid experiences-grid">
              {experiences.map((item) => (
                <article className="panel" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">Cómo funciona</p>
            <h3 className="section-title">Proceso claro para mejorar la conversión</h3>
            <div className="card-grid process-grid">
              {process.map((item) => (
                <article className="process-card" key={item.step}>
                  <span>{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="circuitos" className="section">
          <div className="container">
            <p className="section-kicker">Circuitos estrella</p>
            <h3 className="section-title">Nuestros viajes más deseados</h3>
            <div className="card-grid tours-grid">
              {tours.map((tour) => (
                <article className="tour-card" key={tour.name}>
                  <div className="tour-topline">
                    <span>{tour.duration}</span>
                    <span>{tour.price}</span>
                  </div>
                  <h4>{tour.name}</h4>
                  <p>{tour.desc}</p>
                  <small>{tour.includes}</small>
                  <a href="#contacto" className="text-link">
                    Solicitar información
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container">
            <p className="section-kicker">Testimonios</p>
            <h3 className="section-title">Historias reales de viajeros</h3>
            <div className="card-grid testimonials-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.author}>
                  <p className="testimonial-quote">“{item.quote}”</p>
                  <span className="testimonial-author">{item.author}</span>
                </article>
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
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
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
                Formulario listo para conectar con Formspree, EmailJS o backend propio. Incluye validación de campos y mensajes de error para evitar envíos incompletos.
              </p>
              <p className="recommendation">{selectedTour}</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Nombre</label>
              <input id="name" name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleFieldChange} aria-invalid={Boolean(errors.name)} />
              {errors.name ? <p className="field-error">{errors.name}</p> : null}

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="Email" value={formValues.email} onChange={handleFieldChange} aria-invalid={Boolean(errors.email)} />
              {errors.email ? <p className="field-error">{errors.email}</p> : null}

              <label htmlFor="city">Ciudad de salida en España</label>
              <input id="city" name="city" type="text" placeholder="Ciudad de salida" value={formValues.city} onChange={handleFieldChange} aria-invalid={Boolean(errors.city)} />
              {errors.city ? <p className="field-error">{errors.city}</p> : null}

              <label htmlFor="dates">Fechas aproximadas</label>
              <input id="dates" name="dates" type="text" placeholder="Ej: Octubre 2026" value={formValues.dates} onChange={handleFieldChange} />

              <label htmlFor="travelers">Número de viajeros</label>
              <select id="travelers" name="travelers" value={formValues.travelers} onChange={handleFieldChange}>
                <option value="2">2 viajeros</option>
                <option value="4">4 viajeros</option>
                <option value="6">6 viajeros</option>
                <option value="8+">8 o más</option>
              </select>

              <label htmlFor="message">¿Qué tipo de viaje buscas?</label>
              <textarea id="message" name="message" rows="5" placeholder="Cuéntanos tus intereses (cultura, desierto, lujo, etc.)" value={formValues.message} onChange={handleFieldChange} aria-invalid={Boolean(errors.message)} />
              {errors.message ? <p className="field-error">{errors.message}</p> : null}

              <button type="submit" className="btn">
                Solicitar mi viaje
              </button>

              {isSent ? <p className="success-message">¡Gracias! Hemos recibido tu solicitud y te responderemos pronto.</p> : null}
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
