from fastapi import FastAPI

app = FastAPI(
    title="Ch-AI API",
    description="AI-powered document organization assistant"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to Ch-AI"
    }