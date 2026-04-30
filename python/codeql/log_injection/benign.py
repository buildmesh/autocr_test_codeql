import logging

from flask import Flask, request


app = Flask(__name__)


def clean_for_log(value: str) -> str:
    return value.replace("\r", "\\r").replace("\n", "\\n")


@app.get("/login-safe")
def login_safe():
    logging.warning("login failed for user=%s", clean_for_log(request.args.get("user", "unknown")))
    return "ok"
