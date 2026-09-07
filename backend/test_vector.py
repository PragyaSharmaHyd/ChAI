from services.vector_service import search_chunks


questions = [
    "What is Pragya's research experience?",
    "What programming languages has Pragya used?",
    "Where does Pragya go to college?",
    "What projects has Pragya worked on?"
]


for question in questions:
    print("\nQUESTION:", question)

    results = search_chunks(
        question,
        number_results=3
    )

    for document, distance in zip(
        results["documents"][0],
        results["distances"][0]
    ):
        print("\n----------------")
        print("DISTANCE:", distance)
        print(document)