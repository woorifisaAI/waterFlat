import os
from dotenv import load_dotenv

# load .env
load_dotenv()

myDBid = os.environ.get('AWS_RDB_ID')
myDBpw = os.environ.get('AWS_RDB_PW')
myDBname = os.environ.get('AWS_RDB_DB')
mySecretkey = os.environ.get('SECRET_KEY')

# db를 저장할 폴더/파일이름 
BASE_DIR = os.path.dirname(__file__)

# SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'test.db'))
SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{myDBid}:{myDBpw}@waterflat-db.cicnrdslr6cj.ap-northeast-2.rds.amazonaws.com:3306/{myDBname}"
# SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{myDBid}:{myDBpw}@jehyeon-db-aws.cuhrebejg4k4.ap-northeast-2.rds.amazonaws.com:3306/{myDBname}"
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY=f"{mySecretkey}"