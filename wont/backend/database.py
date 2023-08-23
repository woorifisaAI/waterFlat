from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# SQLALCHEMY_DATABASE_URL = "sqlite:///./myapi.db"
BASE_DIR = os.path.dirname(__file__)
SQLALCHEMY_DATABASE_URL = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'service.db'))
# SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{myDBid}:{myDBpw}@waterflat-db.cicnrdslr6cj.ap-northeast-2.rds.amazonaws.com:3306/{myDBname}"



engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()