from urllib.parse import urlparse

import requests
from flask import Flask, request


app = Flask(__name__)


@app.get("/fetch-same-origin")
def fetch_same_origin():
    url = request.args.get("url", "https://api.example.invalid/health")
    parsed = urlparse(url)
    if parsed.scheme != "https" or parsed.hostname != "api.example.invalid":
        return "blocked", 400
    return requests.get(url, timeout=5).text
