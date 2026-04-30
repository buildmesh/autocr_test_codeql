import yaml

from flask import Flask, request


app = Flask(__name__)


@app.post("/restore-yaml-safe")
def restore_yaml_safe():
    return {"object": yaml.safe_load(request.get_data(as_text=True))}
