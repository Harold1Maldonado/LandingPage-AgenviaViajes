export default function TourCard({ name, duration, price, desc, includes }) {
  return (
    <article className="tour-card">
      <div className="tour-topline">
        <span>{duration}</span>
        <span>{price}</span>
      </div>
      <h4>{name}</h4>
      <p>{desc}</p>
      <small>{includes}</small>
      <a href="#contacto" className="text-link">
        Solicitar información
      </a>
    </article>
  )
}
