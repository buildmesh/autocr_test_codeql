import urllib.request

from flask import Flask, request


app = Flask(__name__)


def target_url(path: str) -> str:
    return "https://" + path


@app.get("/proxy")
def proxy():
    with urllib.request.urlopen(target_url(request.headers["X-Upstream"]), timeout=5) as response:
        return response.read().decode("utf-8")
