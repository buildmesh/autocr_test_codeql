const express = require("express");

const app = express();
const handlers = new Map([["refresh", () => "refresh"], ["status", () => "status"]]);

app.get("/timer-safe", (req, res) => {
  const handler = handlers.get(String(req.query.callback || "status")) || handlers.get("status");
  setTimeout(handler, 10);
  res.send("scheduled");
});
