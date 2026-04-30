import requests

from flask import Flask, request


app = Flask(__name__)


@app.get("/fetch")
def fetch():
    response = requests.get(request.args["url"], timeout=5)
    return response.text
