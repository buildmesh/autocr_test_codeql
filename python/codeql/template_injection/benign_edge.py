from flask import Flask, request


app = Flask(__name__)
TEMPLATES = {
    "hello": "hello {name}",
    "bye": "bye {name}",
}


@app.get("/format-safe")
def format_safe():
    template = TEMPLATES.get(request.args.get("template", "hello"), TEMPLATES["hello"])
    return template.format(name=request.args.get("name", "fixture"))
