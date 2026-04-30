const express = require("express");
const fs = require("fs");

const app = express();
const files = new Map([["welcome", "/srv/app/static/welcome.txt"], ["status", "/srv/app/static/status.txt"]]);

app.get("/read-safe", (req, res) => {
  const file = files.get(String(req.query.file || "welcome")) || files.get("welcome");
  res.send(fs.readFileSync(file, "utf8"));
});
