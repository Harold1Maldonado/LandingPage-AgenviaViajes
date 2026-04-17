export default function FAQItem({ question, answer }) {
  return (
    <details>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  )
}
