import json
import logging

from flask import Flask, request


app = Flask(__name__)


@app.get("/audit-json")
def audit_json():
    logging.info("audit=%s", json.dumps({"actor": request.headers.get("X-Actor", "anonymous")}))
    return "ok"
