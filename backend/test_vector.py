from services.vector_service import store_chunk, search_chunks
from services.embedding_service import create_embedding


chunks = [
    "Education: Bachelor of Science in Computer Science at California State University Fullerton.",
    "Skills: Python, C++, JavaScript, Swift, SQL, Flask.",
    "Research Intern: Used Python and Kaggle to analyze environmental datasets."
]


for index, chunk in enumerate(chunks):
    store_chunk(index, chunk)


questions = [
    "Where do I study?",
    "What programming languages do I know?",
    "What did I do during research?"
]


for question in questions:
    print("\nQUESTION:", question)

    results = search_chunks(question)

    print(results["documents"][0])