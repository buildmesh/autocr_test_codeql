const express = require("express");

const app = express();

app.get("/evaluate", (req, res) => {
  res.json({ result: eval(String(req.query.expression || "1 + 1")) });
});
