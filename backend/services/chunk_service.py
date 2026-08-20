from database import SessionLocal
from models import DocumentChunk
from services.vector_service import store_chunk

# split the given text into chunks
def split_text(text, chunk_size=500, overlap=100):

    chunks = []

    start = 0

    while start < len(text):

        end = start + chunk_size

        chunk = text[start:end]

        chunks.append(chunk)

        start += chunk_size - overlap

    return chunks

# store the cunks into database for referrals 
def save_chunk(document_id, chunks):

    db = SessionLocal()

    for index, chunk_text in enumerate(chunks):

        chunk = DocumentChunk(
            document_id=document_id,
            chunk_index=index,
            content=chunk_text
        )

        db.add(chunk)
        db.commit()
        db.refresh(chunk)

        store_chunk(
            chunk.id,
            chunk_text
        )

    db.close()