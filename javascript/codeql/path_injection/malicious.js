const express = require("express");
const fs = require("fs");

const app = express();

app.get("/read", (req, res) => {
  res.send(fs.readFileSync(String(req.query.path), "utf8"));
});
