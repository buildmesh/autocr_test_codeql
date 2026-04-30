const express = require("express");

const app = express();

function callbackSource(req) {
  return String(req.query.callback || "console.log('ok')");
}

app.get("/timer", (req, res) => {
  setTimeout(callbackSource(req), 10);
  res.send("scheduled");
});
