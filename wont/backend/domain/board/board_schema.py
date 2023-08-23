

import datetime

from pydantic import BaseModel, validator


class Board(BaseModel):
    id: int
    title: str
    content: str
    create_at: datetime.datetime
    modified_at: datetime.datetime
    account_id: int

    #  모델이 스키마로 자동 변환.
    class Config:
        orm_mode = True

class QuestionCreate(BaseModel):
    title: str
    content: str

    @validator('title', 'content')
    def not_empty(cls, v):
        if not v or not v.strip():
            raise ValueError('빈 값은 허용되지 않습니다.')
        return v