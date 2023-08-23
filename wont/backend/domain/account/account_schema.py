
import datetime

from pydantic import BaseModel


class Account(BaseModel):
    id: int
    name: str
    password: str
    grade: int
    dept: str

    # 모델이 스키마로 자동 변환.
    class Config:
        orm_mode = True
