from pathlib import Path

from flask import Flask, request


app = Flask(__name__)
BASE_DIR = Path("/srv/app/uploads")


@app.get("/read-upload")
def read_upload():
    path = BASE_DIR / request.args["name"]
    return path.read_text(encoding="utf-8")
