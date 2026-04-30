const express = require("express");
const childProcess = require("child_process");

const app = express();

app.get("/ping", (req, res) => {
  childProcess.exec(`ping -c 1 ${req.query.host || "127.0.0.1"}`, (error, stdout) => {
    res.status(error ? 500 : 200).send(stdout);
  });
});
