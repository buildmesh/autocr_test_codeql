from flask import Flask, render_template_string, request


app = Flask(__name__)


@app.get("/render-safe")
def render_safe():
    name = request.args.get("name", "fixture")
    return render_template_string("hello {{ name }}", name=name)
