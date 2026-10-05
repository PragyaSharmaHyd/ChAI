import { useRef, useState } from 'react'
import { uploadDocument } from '../services/documentService.js'

function DocumentUpload() {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [status, setStatus] = useState(null)

  function handleFileChange(event) {
    const selectedFile = event.target.files?.[0] ?? null
    setStatus(null)

    if (selectedFile && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setFile(null)
      setStatus({ type: 'error', message: 'Choose a PDF file to upload.' })
      event.target.value = ''
      return
    }

    setFile(selectedFile)
  }

  async function handleUpload() {
    if (!file || isUploading) return

    setIsUploading(true)
    setStatus(null)

    try {
      const message = await uploadDocument(file)
      setStatus({
        type: 'success',
        message,
      })
      setFile(null)
      if (inputRef.current) inputRef.current.value = ''
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'The document could not be uploaded. Please try again.',
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <section className="upload-card" aria-labelledby="upload-title">
      <div className="upload-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
          <path d="M5 14v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />
        </svg>
      </div>
      <h2 id="upload-title">Upload a document</h2>
      <p className="upload-description">Choose a PDF to add it to your ChAI workspace.</p>

      <label className="file-picker">
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        <span>{file ? 'Choose a different PDF' : 'Choose PDF'}</span>
      </label>

      {file && (
        <div className="selected-file" aria-live="polite">
          <span className="selected-file-icon" aria-hidden="true">PDF</span>
          <span className="selected-file-name">{file.name}</span>
          <span className="selected-file-size">{(file.size / (1024 * 1024)).toFixed(1)} MB</span>
        </div>
      )}

      <button
        className="upload-submit"
        type="button"
        onClick={handleUpload}
        disabled={!file || isUploading}
      >
        {isUploading ? 'Uploading…' : 'Upload document'}
      </button>

      {status && (
        <p className={`upload-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
          {status.message}
        </p>
      )}
      <p className="upload-note">PDF files only</p>
    </section>
  )
}

export default DocumentUpload
