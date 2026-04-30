from flask import Flask, request


app = Flask(__name__)


@app.get("/read")
def read_file():
    with open(request.args["path"], encoding="utf-8") as handle:
        return handle.read()
