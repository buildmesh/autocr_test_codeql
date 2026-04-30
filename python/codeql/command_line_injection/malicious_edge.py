import subprocess

from flask import Flask, request


app = Flask(__name__)


def build_command(host: str) -> str:
    return "ping -c 1 " + host


@app.get("/ping-helper")
def ping_helper():
    command = build_command(request.headers.get("X-Target-Host", "127.0.0.1"))
    return subprocess.check_output(command, shell=True, text=True)
