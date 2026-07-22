from services.pdf_service import extract_text


text = extract_text(
    "uploads/Pragya_Sharma_Resume.pdf"
)

print(text[:500])