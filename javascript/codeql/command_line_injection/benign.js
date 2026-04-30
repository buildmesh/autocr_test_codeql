const express = require("express");
const childProcess = require("child_process");

const app = express();
const allowedHosts = new Map([["localhost", "127.0.0.1"], ["loopback", "127.0.0.1"]]);

app.get("/ping-safe", (req, res) => {
  const host = allowedHosts.get(String(req.query.host || "localhost")) || "127.0.0.1";
  childProcess.execFile("ping", ["-c", "1", host], (error, stdout) => {
    res.status(error ? 500 : 200).send(stdout);
  });
});
