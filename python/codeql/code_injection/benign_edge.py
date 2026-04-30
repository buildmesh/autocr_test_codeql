from flask import Flask, request


app = Flask(__name__)
OPERATIONS = {
    "double": lambda value: value * 2,
    "square": lambda value: value * value,
}


@app.get("/calculate")
def calculate():
    operation = OPERATIONS.get(request.args.get("operation", "double"), OPERATIONS["double"])
    value = int(request.args.get("value", "2"))
    return {"result": operation(value)}
