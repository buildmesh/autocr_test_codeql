import logging

from flask import Flask, request


app = Flask(__name__)
logger = logging.getLogger(__name__)


def audit_value() -> str:
    return request.headers.get("X-Actor", "anonymous")


@app.get("/audit")
def audit():
    logger.warning("Actor: %s", audit_value())
    return "ok"
