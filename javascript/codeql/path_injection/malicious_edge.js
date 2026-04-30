const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const baseDir = "/srv/app/uploads";

app.get("/read-upload", (req, res) => {
  res.send(fs.readFileSync(path.join(baseDir, String(req.query.name)), "utf8"));
});
