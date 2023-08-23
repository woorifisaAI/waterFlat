from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from starlette import status
from database import get_db
from domain.board import board_schema, board_crud

router = APIRouter(
    prefix="/api/board",
)


@router.get("/list", response_model=list[board_schema.Board])
def board_list(db: Session = Depends(get_db)):
    _board_list = board_crud.get_board_list(db)
    return _board_list

@router.post("/create", status_code=status.HTTP_204_NO_CONTENT)
def question_create(_question_create: board_schema.QuestionCreate,
                    db: Session = Depends(get_db)):
    board_crud.create_question(db=db, question_create=_question_create)