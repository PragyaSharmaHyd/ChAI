from services.vector_service import search_chunks
from services.llm_service import generate_answer


def answer_question(question):

    results = search_chunks(question)

    chunks = results["documents"][0]

    context = "\n\n".join(chunks)

    answer = generate_answer(question, context)

    return answer