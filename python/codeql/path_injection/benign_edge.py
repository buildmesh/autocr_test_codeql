from pathlib import Path

from flask import Flask, request


app = Flask(__name__)
FILES = {
    "profile": Path("/srv/app/uploads/profile.txt"),
    "avatar": Path("/srv/app/uploads/avatar.txt"),
}


@app.get("/read-contained")
def read_contained():
    path = FILES.get(request.args.get("name", "profile"), FILES["profile"])
    return path.read_text(encoding="utf-8")
