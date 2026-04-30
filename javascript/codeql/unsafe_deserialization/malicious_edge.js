const express = require("express");
const yaml = require("js-yaml");

const app = express();

function decodePayload(value) {
  return Buffer.from(value, "base64").toString("utf8");
}

app.get("/restore-token", (req, res) => {
  res.json({ object: yaml.load(decodePayload(String(req.query.payload || ""))) });
});
