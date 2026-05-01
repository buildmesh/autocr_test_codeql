const express = require("express");
const jsyaml = require("js-yaml");

const app = express();

function decodePayload(value) {
  return Buffer.from(value, "base64").toString("utf8");
}

app.get("/restore-token/:payload", (req, res) => {
  const payload = decodePayload(req.params.payload);
  res.json({ object: jsyaml.load(payload) });
});
