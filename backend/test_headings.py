from services.pdf_service import extract_text


spans = extract_text("uploads/Pragya_Sharma_Resume.pdf")


print("\nPOSSIBLE HEADINGS:\n")


for span in spans:

    text = span["text"]
    font = span["font"]
    size = span["size"]

    if "Bold" in font and size >= 11:
        print(
            f"HEADING: {text} "
            f"| FONT: {font} "
            f"| SIZE: {size}"
        )