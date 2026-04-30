import subprocess

from flask import Flask, request


app = Flask(__name__)


@app.get("/diagnostics")
def diagnostics():
    host = request.args.get("host", "127.0.0.1")
    output = subprocess.check_output(f"ping -c 1 {host}", shell=True, text=True)
    return {"output": output}


if __name__ == "__main__":
    app.run()
