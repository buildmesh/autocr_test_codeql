import base64

from flask import Flask, request


app = Flask(__name__)


def decode_payload(value: str) -> str:
    return base64.b64decode(value).decode("utf-8")


@app.post("/run-script")
def run_script():
    script = decode_payload(request.form["payload"])
    namespace: dict[str, object] = {}
    exec(script, namespace)
    return {"keys": sorted(namespace)}
