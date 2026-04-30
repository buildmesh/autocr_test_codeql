import pickle

from flask import Flask, request


app = Flask(__name__)


@app.post("/restore")
def restore():
    return {"object": repr(pickle.loads(request.get_data()))}
