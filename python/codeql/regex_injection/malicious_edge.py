import re

from flask import Flask, request


app = Flask(__name__)


def make_pattern(prefix: str) -> str:
    return "^" + prefix + ".*$"


@app.get("/match-prefix")
def match_prefix():
    return {"matched": bool(re.search(make_pattern(request.args["prefix"]), request.args.get("value", "")))}
