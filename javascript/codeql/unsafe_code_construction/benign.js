const express = require("express");

const app = express();

app.get("/script-safe", (req, res) => {
  const value = Number(req.query.value || 1);
  res.json({ result: value + 1 });
});
