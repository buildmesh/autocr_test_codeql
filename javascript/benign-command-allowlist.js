const express = require("express");
const childProcess = require("child_process");

const app = express();
const allowedHosts = new Map([
  ["localhost", "127.0.0.1"],
  ["loopback", "127.0.0.1"],
]);

app.get("/diagnostics", (req, res) => {
  const requestedHost = String(req.query.host || "localhost");
  const host = allowedHosts.get(requestedHost) || "127.0.0.1";

  childProcess.execFile("ping", ["-c", "1", host], (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: stderr });
      return;
    }

    res.json({ output: stdout });
  });
});

app.listen(3000);
