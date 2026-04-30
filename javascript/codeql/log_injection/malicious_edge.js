const express = require("express");

const app = express();

function actor(req) {
  return req.get("X-Actor") || "anonymous";
}

app.get("/audit", (req, res) => {
  console.info(`actor=${actor(req)} action=download`);
  res.send("ok");
});
