from flask import Flask, request


app = Flask(__name__)


@app.get("/evaluate")
def evaluate():
    expression = request.args.get("expression", "1 + 1")
    return {"result": eval(expression)}
