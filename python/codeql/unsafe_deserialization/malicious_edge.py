import base64
import pickle

from flask import Flask, request


app = Flask(__name__)


def decode_blob(value: str) -> bytes:
    return base64.b64decode(value)


@app.post("/restore-token")
def restore_token():
    payload = decode_blob(request.form["payload"])
    return {"object": repr(pickle.loads(payload))}
