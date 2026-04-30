const express = require("express");
const yaml = require("js-yaml");

const app = express();
app.use(express.text({ type: "*/*" }));

app.post("/restore-yaml-safe", (req, res) => {
  res.json({ object: yaml.load(req.body, { schema: yaml.FAILSAFE_SCHEMA }) });
});
