from sqlalchemy import Column, Integer, String  # ChAI's document memory
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


    category = Column(
        String,
        default="Unknown"
    )


    priority = Column(
        String,
        default="Unknown"
    )