import requests
from flask import Flask, request


app = Flask(__name__)
PATHS = {
    "health": "/health",
    "status": "/status",
}


@app.get("/fetch-same-origin")
def fetch_same_origin():
    path = PATHS.get(request.args.get("path", "health"), PATHS["health"])
    url = f"https://api.example.invalid{path}"
    return requests.get(url, timeout=5).text
