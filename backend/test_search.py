from services.vector_service import search_chunks

results = search_chunks(
    "What programming languages have I used?",
    number_results=3
)

print("Distances:")
print(results["distances"])

print("\nDocuments:")

for document in results["documents"][0]:
    print("----------------")
    print(document)