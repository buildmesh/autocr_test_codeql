const express = require("express");
const childProcess = require("child_process");

const app = express();
const commands = new Map([["version", ["node", ["--version"]]], ["whoami", ["whoami", []]]]);

app.get("/command-safe", (req, res) => {
  const [command, args] = commands.get(String(req.query.command || "version")) || commands.get("version");
  childProcess.execFile(command, args, (error, stdout) => {
    res.status(error ? 500 : 200).send(stdout);
  });
});
