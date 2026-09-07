import fitz

pdf_path = "uploads/Pragya_Sharma_Resume.pdf"

document = fitz.open(pdf_path)

for page in document:

    blocks = page.get_text("dict")["blocks"]

    for block in blocks:

        if "lines" not in block:
            continue

        for line in block["lines"]:

            for span in line["spans"]:

                text = span["text"].strip()

                if text:
                    print(
                        "TEXT:", repr(text),
                        "| FONT:", span["font"],
                        "| SIZE:", span["size"]
                    )

document.close()