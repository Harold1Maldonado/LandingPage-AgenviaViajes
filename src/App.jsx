const destinations = [
  {
    name: 'Marrakech',
    subtitle: 'Color, tradición y energía vibrante',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Chefchaouen',
    subtitle: 'La ciudad azul más fotogénica',
    image:
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Fez',
    subtitle: 'Historia viva entre callejuelas eternas',
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Sáhara',
    subtitle: 'Dunas doradas y noches mágicas',
    image:
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
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
  },
  {
    name: 'Ciudades Imperiales',
    duration: '7 días',
    price: 'Desde 890 €',
    desc: 'Marrakech, Fez, Rabat y Meknes en un circuito cultural con mucho encanto.',
  },
  {
    name: 'Norte de Marruecos',
    duration: '5 días',
    price: 'Desde 620 €',
    desc: 'Tánger, Tetuán y Chefchaouen con salida cómoda desde el sur de España.',
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
    quote:
      'El desierto fue una experiencia brutal. Repetiríamos sin dudarlo.',
    author: 'Javier R.',
  },
]

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container nav">
          <div>
            <p className="brand-kicker">Atlas & Mar</p>
            <h1 className="brand-title">España → Marruecos</h1>
          </div>

          <nav className="nav-links">
            <a href="#destinos">Destinos</a>
            <a href="#experiencias">Experiencias</a>
            <a href="#circuitos">Circuitos</a>
            <a href="#contacto" className="btn btn-small">
              Reservar
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="eyebrow">Marruecos, tan cerca. Tan inolvidable.</p>
            <h2>Descubre Marruecos desde España con una web que enamora a primera vista.</h2>
            <p className="hero-text">
              Escapadas, circuitos premium, desierto, riads y experiencias auténticas a solo unas horas de ti.
            </p>
            <div className="hero-actions">
              <a href="#circuitos" className="btn">
                Ver experiencias
              </a>
              <a href="#contacto" className="btn btn-secondary">
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="container intro-grid">
            <div>
              <p className="section-kicker">Entre dos mundos</p>
              <h3>Una propuesta visual premium para vender turismo entre España y Marruecos.</h3>
            </div>
            <p>
              Este proyecto base está pensado para captar viajeros con una estética cálida, cinematográfica y aspiracional. Combina imágenes grandes, bloques emocionales, estructura comercial y llamadas a la acción visibles.
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
                  <img src={destination.image} alt={destination.name} />
                  <div className="destination-card__content">
                    <h4>{destination.name}</h4>
                    <p>{destination.subtitle}</p>
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

        <section className="section visual-banner">
          <div className="container visual-banner__content">
            <p className="section-kicker">Más cerca de lo que imaginas</p>
            <h3>Ferry o avión desde España, asistencia en español y rutas diseñadas para disfrutar.</h3>
            <p>
              El concepto de esta landing está orientado a la conversión: acceso rápido, percepción de confianza y sensación de viaje premium desde el primer scroll.
            </p>
          </div>
        </section>

        <section id="circuitos" className="section section-dark">
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
                  <a href="#contacto" className="text-link">
                    Solicitar información
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
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

        <section id="contacto" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker">Empieza tu viaje hoy</p>
              <h3 className="section-title">Cuéntanos cómo imaginas tu viaje y te preparamos una propuesta irresistible.</h3>
              <p>
                Este formulario es una base editable. Puedes conectarlo después con Formspree, EmailJS, un backend propio o un CRM.
              </p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Ciudad de salida en España" />
              <input type="text" placeholder="Fechas aproximadas" />
              <textarea rows="5" placeholder="Cuéntanos qué tipo de viaje buscas" />
              <button type="submit" className="btn">
                Solicitar mi viaje
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
