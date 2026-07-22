from sqlalchemy import Column, Integer, String, Text, ForeignKey
from database import Base


class Document(Base):

    __tablename__ = "documents"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    filename = Column(
        String,
        nullable=False
    )

    filepath = Column(
        String,
        nullable=False
    )

    category = Column(
        String,
        default="Unknown"
    )

    priority = Column(
        String,
        default="Unknown"
    )

class DocumentChunk(Base):

    __tablename__ = "document_chunks"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    document_id = Column(
        Integer,
        ForeignKey("documents.id")
    )

    chunk_index = Column(
        Integer
    )

    content = Column(
        Text,
        nullable=False
    )