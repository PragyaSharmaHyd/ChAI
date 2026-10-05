const UPLOAD_URL = 'http://127.0.0.1:8000/upload'

export async function uploadDocument(file) {
  const formData = new FormData()
  formData.append('file', file)

  let response
  try {
    response = await fetch(UPLOAD_URL, {
      method: 'POST',
      body: formData,
    })
  } catch {
    throw new Error(
      'Could not reach ChAI. Check that the backend is running at http://127.0.0.1:8000.',
    )
  }

  const responseText = await response.text()
  let result
  try {
    result = JSON.parse(responseText)
  } catch {
    result = null
  }

  if (!response.ok) {
    const detail = result?.detail
    const message = typeof detail === 'string'
      ? detail
      : result?.message
    throw new Error(
      message || `Upload failed (${response.status}). Please try again.`,
    )
  }

  return result?.message || 'Document uploaded successfully'
}
