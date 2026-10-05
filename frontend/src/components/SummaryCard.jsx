function CardIcon({ name }) {
  if (name === 'documents') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.75h7l4 4v12.5H7z" />
        <path d="M14 3.75v4h4M10 12h5M10 15.5h5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5h14v10H11l-4.5 3v-3H5z" />
      <path d="M9 9.5h6M9 12.5h4" />
    </svg>
  )
}

function SummaryCard({ label, value, detail, icon, tone }) {
  return (
    <article className="summary-card">
      <div className={`summary-icon ${tone}`}>
        <CardIcon name={icon} />
      </div>
      <div className="summary-card-copy">
        <span className="summary-label">{label}</span>
        <span className="summary-value">{value}</span>
        <span className="summary-detail">{detail}</span>
      </div>
      <span className="summary-arrow" aria-hidden="true">↗</span>
    </article>
  )
}

export default SummaryCard