from services.embedding_service import create_embedding


text = "Python FastAPI SQL database"


embedding = create_embedding(text)


print("Embedding length:", len(embedding))
print("First 5 values:", embedding[:5])