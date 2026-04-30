const express = require("express");
const childProcess = require("child_process");

const app = express();

function buildCommand(host) {
  return "ping -c 1 " + host;
}

app.get("/ping-helper", (req, res) => {
  childProcess.exec(buildCommand(req.get("X-Target-Host") || "127.0.0.1"), (error, stdout) => {
    res.status(error ? 500 : 200).send(stdout);
  });
});
