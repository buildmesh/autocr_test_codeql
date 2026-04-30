const express = require("express");

const app = express();

function buildFunction(source) {
  return new Function("return " + source);
}

app.get("/function", (req, res) => {
  const fn = buildFunction(String(req.query.expression || "1 + 1"));
  res.json({ result: fn() });
});
