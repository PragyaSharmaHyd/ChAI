const documents = [
  { title: 'Product roadmap 2025', kind: 'PDF', updated: 'Today at 9:42 AM', color: 'coral', initials: 'PDF' },
  { title: 'Customer interview notes', kind: 'DOC', updated: 'Yesterday', color: 'blue', initials: 'DOC' },
  { title: 'Q3 research synthesis', kind: 'PDF', updated: 'Sep 24, 2025', color: 'green', initials: 'PDF' },
  { title: 'Brand voice guidelines', kind: 'DOC', updated: 'Sep 21, 2025', color: 'violet', initials: 'DOC' },
]

function DocumentIcon({ color, initials }) {
  return <span className={`document-icon ${color}`} aria-hidden="true">{initials}</span>
}

function RecentDocuments() {
  return (
    <section className="recent-section" aria-labelledby="recent-heading">
      <div className="section-heading">
        <div>
          <div className="section-kicker">YOUR LIBRARY</div>
          <h2 id="recent-heading">Recent documents</h2>
        </div>
        <button className="text-button" type="button">View all <span aria-hidden="true">↗</span></button>
      </div>

      <div className="document-list">
        {documents.map((document) => (
          <article className="document-row" key={document.title}>
            <DocumentIcon color={document.color} initials={document.initials} />
            <div className="document-copy">
              <h3>{document.title}</h3>
              <span>{document.kind} <span className="metadata-dot">·</span> {document.updated}</span>
            </div>
            <button className="row-action" type="button" aria-label={`More options for ${document.title}`}>
              <span aria-hidden="true">···</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentDocuments