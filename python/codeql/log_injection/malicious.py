import logging

from flask import Flask, request


app = Flask(__name__)


@app.get("/login")
def login():
    logging.info("User name: %s", request.args.get("user", "unknown"))
    return "ok"
