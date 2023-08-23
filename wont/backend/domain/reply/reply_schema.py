

import datetime

from pydantic import BaseModel


class Reply(BaseModel):
    id: int
    comment: str
    create_at: datetime.datetime
    modified_at: datetime.datetime
    account_id: int
    board_id: int

    #  모델이 스키마로 자동 변환.
    class Config:
        orm_mode = True
