import requests

from flask import Flask, request


app = Flask(__name__)
ALLOWED_URLS = {
    "status": "https://status.example.invalid/health",
    "docs": "https://docs.example.invalid/",
}


@app.get("/fetch-safe")
def fetch_safe():
    url = ALLOWED_URLS.get(request.args.get("target", "status"), ALLOWED_URLS["status"])
    return requests.get(url, timeout=5).text
