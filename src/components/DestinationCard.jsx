export default function DestinationCard({ name, subtitle, image, highlight }) {
  return (
    <article className="destination-card">
      <img src={image} alt={`Paisaje de ${name}`} loading="lazy" />
      <div className="destination-card__content">
        <h4>{name}</h4>
        <p>{subtitle}</p>
        <span>{highlight}</span>
      </div>
    </article>
  )
}
