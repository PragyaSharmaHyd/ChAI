import shutil
import os


UPLOAD_FOLDER = "uploads"

os.makedirs(
    UPLOAD_FOLDER,  # where files will be saved
    exist_ok=True
)


def save_file(file):    # saves an uploaded files to the uploads directory

    file_path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    return file_path