from services.vector_service import search_chunks


results = search_chunks(
    "What programming languages have I used?"
)


print(results["documents"])