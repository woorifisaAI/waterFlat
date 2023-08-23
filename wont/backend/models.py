from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship


from database import Base



class Account(Base):
    __tablename__ = "account"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    grade = Column(Integer, nullable=False)
    dept = Column(String, nullable=False)

class Board(Base):
    __tablename__ = "board"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    create_at = Column(DateTime, nullable=False)
    modified_at = Column(DateTime, nullable=False)
    account_id = Column(Integer, ForeignKey("account.id"))
    account = relationship("Account", backref="boards")

class Reply(Base):
    __tablename__ = "reply"

    id = Column(Integer, primary_key=True)
    comment = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    modified_at = Column(DateTime, nullable=False)
    account_id = Column(Integer, ForeignKey("account.id"))
    account = relationship("Account", backref="replys")
    board_id = Column(Integer, ForeignKey("board.id"))
    board = relationship("Board", backref="replys")