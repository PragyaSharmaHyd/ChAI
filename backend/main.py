from fastapi import FastAPI
from database import engine
from models import Base


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Ch-AI API",
    description="AI-powered document organization assistant"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Ch-AI"
    }