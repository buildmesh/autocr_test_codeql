const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const baseDir = path.resolve("/srv/app/uploads");

app.get("/read-contained", (req, res) => {
  const resolved = path.resolve(baseDir, String(req.query.name || "welcome.txt"));
  if (!resolved.startsWith(baseDir + path.sep)) {
    res.status(400).send("blocked");
    return;
  }
  res.send(fs.readFileSync(resolved, "utf8"));
});
