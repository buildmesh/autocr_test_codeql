const express = require("express");
const fs = require("fs");

const app = express();
const baseDir = "/srv/app/uploads/";

function uploadedPath(name) {
  return baseDir + name;
}

app.get("/read-upload", (req, res) => {
  res.send(fs.readFileSync(uploadedPath(String(req.query.name)), "utf8"));
});
