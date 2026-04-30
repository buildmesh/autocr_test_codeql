import subprocess

from flask import Flask, request


app = Flask(__name__)
ALLOWED_HOSTS = {
    "localhost": "127.0.0.1",
    "loopback": "127.0.0.1",
}


@app.get("/diagnostics")
def diagnostics():
    requested_host = request.args.get("host", "localhost")
    host = ALLOWED_HOSTS.get(requested_host, "127.0.0.1")
    output = subprocess.check_output(["ping", "-c", "1", host], text=True)
    return {"output": output}


if __name__ == "__main__":
    app.run()
