from sqlalchemy import create_engine    # using SQL Alchemy for data storage
from sqlalchemy.orm import sessionmaker, declarative_base


DATABASE_URL = "sqlite:///./chai.db"    # creating chai.db 
                                        # Python code -> SQLAlchemy -> chai.db


engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


Base = declarative_base()