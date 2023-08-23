
from models import Account
from sqlalchemy.orm import Session


def get_account_list(db: Session):
    account_list = db.query(Account)\
        .order_by(Account.id.asc())\
        .all()
    return account_list
