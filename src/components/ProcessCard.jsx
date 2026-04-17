export default function ProcessCard({ step, title, text }) {
  return (
    <article className="process-card">
      <span>{step}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  )
}
