from services.vector_service import search_chunks
from services.llm_service import generate_answer


def answer_question(question):

    results = search_chunks(question)

    chunks = results["documents"][0]    # getting the retreived chunks

    context = "\n\n".join(chunks)   # combining the chunks

    answer = generate_answer(question, context)

    return answer