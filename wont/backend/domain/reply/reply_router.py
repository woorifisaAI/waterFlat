from fastapi import APIRouter

from database import SessionLocal
from models import Reply

router = APIRouter(
    prefix="/api/reply",
)


@router.get("/list")
def reply_list():
    db = SessionLocal()
    _reply_list = db.query(Reply).order_by(Reply.create_date.desc()).all()
    db.close()
    return _reply_list
