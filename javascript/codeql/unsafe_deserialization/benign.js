const express = require("express");

const app = express();
app.use(express.json());

app.post("/restore-json", (req, res) => {
  res.json({ object: req.body });
});
