const express = require("express");

const app = express();

app.get("/parse-json", (req, res) => {
  res.json({ parsed: JSON.parse(String(req.query.value || "{}")) });
});
