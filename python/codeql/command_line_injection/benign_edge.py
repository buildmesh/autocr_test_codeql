import subprocess

from flask import Flask, request


app = Flask(__name__)
COMMANDS = {
    "version": ["python3", "--version"],
    "whoami": ["whoami"],
}


@app.get("/command-safe")
def command_safe():
    command = COMMANDS.get(request.args.get("command", "version"), COMMANDS["version"])
    return subprocess.check_output(command, text=True)
