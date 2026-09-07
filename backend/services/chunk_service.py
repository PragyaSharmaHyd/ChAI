from database import SessionLocal
from models import DocumentChunk
from services.vector_service import store_chunk

# split the given text into chunks
import re


def split_text(spans):

    chunks = []
    current_chunk = ""

    section_pattern = re.compile(r"^[A-Z][A-Z\s&]+$")

    for span in spans:

        line = span["text"].strip()

        if not line:
            continue

        # Check if this is a major section heading
        if section_pattern.match(line) and span["font"] == "Inter18pt-Bold" and span["size"] == 11.0:

            if current_chunk:
                chunks.append(current_chunk.strip())

            current_chunk = f"[SECTION: {line}]"

        else:

            if current_chunk:
                current_chunk += "\n" + line

            else:
                current_chunk = line

    if current_chunk:
        chunks.append(current_chunk.strip())

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