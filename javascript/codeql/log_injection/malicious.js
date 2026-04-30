const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  console.warn("login failed for user=" + String(req.query.user || "unknown"));
  res.send("ok");
});
