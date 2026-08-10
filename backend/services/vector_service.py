import chromadb
from services.embedding_service import create_embedding


# Create ChromaDB client
client = chromadb.PersistentClient(
    path="./chroma_db"
)


# Create collection
collection = client.get_or_create_collection(
    name="document_chunks"
)


def store_chunk(chunk_id, text):

    embedding = create_embedding(text)

    collection.add(
        ids=[str(chunk_id)],
        embeddings=[embedding],
        documents=[text]
    )


def search_chunks(query, number_results=5):

    query_embedding = create_embedding(query)

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=number_results
    )

    return results