from database import SessionLocal
from models import Document

db = SessionLocal()

docs = db.query(Document).all()

for doc in docs:
    print(doc.id, doc.filename, doc.filepath)

db.close()