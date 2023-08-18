from fastapi import APIRouter

from database import SessionLocal
from models import Board

router = APIRouter(
    prefix="/api/question",
)


@router.get("/list")
def question_list():
    db = SessionLocal()
    _board_list = db.query(Board).order_by(Board.create_date.desc()).all()
    db.close()
    return _board_list
