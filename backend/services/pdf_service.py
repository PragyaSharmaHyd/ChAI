import fitz  # PyMuPDF


def extract_text(file_path):

    document = fitz.open(file_path)

    spans = []

    for page in document:

        blocks = page.get_text("dict")["blocks"]

        for block in blocks:

            if "lines" not in block:
                continue

            for line in block["lines"]:

                for span in line["spans"]:

                    text = span["text"].strip()

                    if text:
                        spans.append({
                            "text": text,
                            "font": span["font"],
                            "size": span["size"]
                        })

    document.close()

    return spans