import re

from flask import Flask, request


app = Flask(__name__)
ALLOWED_PATTERNS = {"word": r"^\w+$", "number": r"^\d+$"}


@app.get("/match-allowlist")
def match_allowlist():
    pattern = re.compile(ALLOWED_PATTERNS.get(request.args.get("kind", "word"), ALLOWED_PATTERNS["word"]))
    return {"matched": bool(pattern.search(request.args.get("value", "")))}
