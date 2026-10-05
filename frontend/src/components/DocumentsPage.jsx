import DocumentUpload from './DocumentUpload.jsx'

function DocumentsPage() {
  return (
    <div className="documents-page">
      <header className="documents-page-header">
        <div className="section-kicker">YOUR LIBRARY</div>
        <h1>Documents</h1>
        <p>Upload a PDF to start exploring it with ChAI.</p>
      </header>
      <DocumentUpload />
    </div>
  )
}

export default DocumentsPage
