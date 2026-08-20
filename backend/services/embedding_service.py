from sentence_transformers import SentenceTransformer

# generating embeddings for a text using pre-trained SentenceTransformer model

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


def create_embedding(text): # encodes input test into embedding using the pre-trained model and returns it as a list

    embedding = model.encode(text)

    return embedding.tolist()