import ast

from flask import Flask, request


app = Flask(__name__)


@app.get("/literal")
def literal():
    value = request.args.get("value", "[]")
    return {"result": ast.literal_eval(value)}
