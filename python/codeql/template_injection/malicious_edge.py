from flask import Flask, request
from jinja2 import Environment


app = Flask(__name__)
env = Environment(autoescape=True)


def choose_template() -> str:
    return request.headers.get("X-Template", "hello {{ name }}")


@app.get("/render-helper")
def render_helper():
    return env.from_string(choose_template()).render(name="fixture")
