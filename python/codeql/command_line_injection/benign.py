import subprocess

from flask import Flask, request


app = Flask(__name__)
ALLOWED_HOSTS = {"localhost": "127.0.0.1", "loopback": "127.0.0.1"}


@app.get("/ping-safe")
def ping_safe():
    host = ALLOWED_HOSTS.get(request.args.get("host", "localhost"), "127.0.0.1")
    return subprocess.check_output(["ping", "-c", "1", host], text=True)
