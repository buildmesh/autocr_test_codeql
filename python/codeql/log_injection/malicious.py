import logging

from flask import Flask, request


app = Flask(__name__)


@app.get("/login")
def login():
    logging.warning("login failed for user=" + request.args.get("user", "unknown"))
    return "ok"
