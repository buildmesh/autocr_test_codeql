const express = require("express");

const app = express();

function cleanForLog(value) {
  return String(value).replace(/\r/g, "\\r").replace(/\n/g, "\\n");
}

app.get("/login-safe", (req, res) => {
  console.warn("login failed for user=%s", cleanForLog(req.query.user || "unknown"));
  res.send("ok");
});
