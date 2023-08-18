
import datetime

from pydantic import BaseModel


class Account(BaseModel):
    id: int
    name: str
    password: str
    grade: int
    dept: str

    class Config:
        orm_mode = True