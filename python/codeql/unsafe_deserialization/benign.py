import json

from flask import Flask, request


app = Flask(__name__)


@app.post("/restore-json")
def restore_json():
    return {"object": json.loads(request.get_data(as_text=True))}
