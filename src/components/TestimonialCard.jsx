export default function TestimonialCard({ quote, author }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">"{quote}"</p>
      <span className="testimonial-author">{author}</span>
    </article>
  )
}
