from flask import Flask, request
from jinja2 import Template


app = Flask(__name__)


@app.get("/render")
def render():
    template = Template(request.args.get("template", "hello"))
    return template.render(name="fixture")
