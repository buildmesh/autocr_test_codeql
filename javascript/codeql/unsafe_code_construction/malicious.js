const express = require("express");
const vm = require("vm");

const app = express();

app.get("/script", (req, res) => {
  const script = new vm.Script(String(req.query.script || "1 + 1"));
  res.json({ result: script.runInNewContext({}) });
});
