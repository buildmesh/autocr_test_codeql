const express = require("express");
const childProcess = require("child_process");

const app = express();

app.get("/diagnostics", (req, res) => {
  const host = req.query.host || "127.0.0.1";
  childProcess.exec(`ping -c 1 ${host}`, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: stderr });
      return;
    }

    res.json({ output: stdout });
  });
});

app.listen(3000);
