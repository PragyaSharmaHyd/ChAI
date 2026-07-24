from fastapi import FastAPI, UploadFile, File, Depends
from sqlalchemy.orm import Session

from services.file_service import save_file
from services.pdf_service import extract_text
from services.chunk_service import split_text

from database import engine
from models import Base, Document, DocumentChunk
from dependencies import get_db

import shutil
import os


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Ch-AI API",
    description="AI-powered document organization assistant"
)


UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,
    exist_ok=True
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Ch-AI"
    }



@app.post("/upload")
def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):

    file_path = save_file(file)
    text = extract_text(file_path)
    chunks = split_text(text)

    document = Document(
        filename=file.filename,
        filepath=file_path
    )

    db.add(document)
    db.commit()
    db.refresh(document)

    for index, chunk in enumerate(chunks):

        document_chunk = DocumentChunk(
            document_id=document.id,
            chunk_index=index,
            content=chunk
        )

        db.add(document_chunk)

    db.commit()

    return {
        "message": "Document uploaded successfully"
    }