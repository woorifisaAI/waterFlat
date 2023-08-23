from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from domain.account import account_schema, account_crud
# from models import Account

router = APIRouter(
    prefix="/api/account",
)


@router.get("/list", response_model=list[account_schema.Account])
def account_list(db: Session = Depends(get_db)):
    _account_list = account_crud.get_account_list(db)
    return _account_list
