import re

from flask import Flask, request


app = Flask(__name__)


@app.get("/match")
def match():
    pattern = re.compile(request.args["pattern"])
    return {"matched": bool(pattern.search(request.args.get("value", "")))}
