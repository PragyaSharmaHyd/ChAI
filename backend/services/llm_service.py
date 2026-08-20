import ollama


def generate_answer(question, context):
    response = ollama.chat(
        model="llama3.2:3b",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are ChAI, an assistant that answers questions "
                    "using the provided document context. "
                    "Only use information from the context to answer. "
                    "If the answer cannot be found in the context, "
                    "say you don't have enough information."
                )
            },
            {
                "role": "user",
                "content": f"""
Context:
{context}

Question:
{question}
"""
            }
        ]
    )

    return response["message"]["content"]