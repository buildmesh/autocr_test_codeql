const express = require("express");
const serialize = require("node-serialize");

const app = express();
app.use(express.text({ type: "*/*" }));

app.post("/restore", (req, res) => {
  res.json({ object: serialize.unserialize(req.body) });
});
