import re

from flask import Flask, request


app = Flask(__name__)


@app.get("/match-safe")
def match_safe():
    pattern = re.compile(re.escape(request.args.get("literal", "")))
    return {"matched": bool(pattern.search(request.args.get("value", "")))}
