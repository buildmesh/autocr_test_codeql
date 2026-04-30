from pathlib import Path

from flask import Flask, request


app = Flask(__name__)
FILES = {
    "welcome": Path("/srv/app/static/welcome.txt"),
    "status": Path("/srv/app/static/status.txt"),
}


@app.get("/read-safe")
def read_safe():
    path = FILES.get(request.args.get("file", "welcome"), FILES["welcome"])
    return path.read_text(encoding="utf-8")
