const express = require("express");

const app = express();
const operations = new Map([["double", (value) => value * 2], ["square", (value) => value * value]]);

app.get("/calculate", (req, res) => {
  const operation = operations.get(String(req.query.operation || "double")) || operations.get("double");
  res.json({ result: operation(Number(req.query.value || 2)) });
});
