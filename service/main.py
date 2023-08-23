from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from domain.board import board_router
from domain.account import account_router

app = FastAPI()

origins = [
    "http://localhost:5173",
    # "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello")
def hello():
    return {"message": "안녕하세요 파이보"}


app.include_router(board_router.router)
app.include_router(account_router.router)
