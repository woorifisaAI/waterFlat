from datetime import datetime
from models import Board
from sqlalchemy.orm import Session
from domain.board.board_schema import QuestionCreate

def get_board_list(db: Session):
    board_list = db.query(Board)\
        .order_by(Board.modified_at.desc())\
        .all()
    return board_list

def get_board(db: Session, id: int):
    question = db.query(Board).get(id)
    return question
def create_question(db: Session, question_create: QuestionCreate):
    db_question = Board(title=question_create.title,
                           content=question_create.content,
                           create_at=datetime.now(),
                           modified_at=datetime.now(),
                        account_id=1
                        )
    db.add(db_question)
    db.commit()