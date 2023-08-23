# backend/Dockerfile
FROM python:3.9

COPY requirements.txt /tmp/requirements.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r /tmp/requirements.txt

WORKDIR /workspace
RUN pip install fastapi uvicorn[standard] --no-cache-dir 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0"]
