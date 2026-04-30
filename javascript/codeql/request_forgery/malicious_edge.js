const express = require("express");

const app = express();

function targetUrl(host) {
  return "https://" + host + "/health";
}

app.get("/proxy", async (req, res) => {
  const response = await fetch(targetUrl(String(req.get("X-Upstream"))));
  res.send(await response.text());
});
