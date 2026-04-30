from pathlib import Path

from flask import Flask, request


app = Flask(__name__)
BASE_DIR = Path("/srv/app/uploads").resolve()


@app.get("/read-contained")
def read_contained():
    name = request.args.get("name", "welcome.txt")
    path = (BASE_DIR / name).resolve()
    if BASE_DIR not in path.parents:
        return "blocked", 400
    return path.read_text(encoding="utf-8")
