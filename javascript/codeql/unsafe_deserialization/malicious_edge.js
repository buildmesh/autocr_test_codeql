const express = require("express");
const serialize = require("node-serialize");

const app = express();

function decodePayload(value) {
  return Buffer.from(value, "base64").toString("utf8");
}

app.get("/restore-token", (req, res) => {
  res.json({ object: serialize.unserialize(decodePayload(String(req.query.payload || ""))) });
});
