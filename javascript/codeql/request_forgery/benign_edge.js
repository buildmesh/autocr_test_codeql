const axios = require("axios");
const express = require("express");

const app = express();
const paths = new Map([
  ["health", "/health"],
  ["status", "/status"],
]);

app.get("/fetch-same-origin", async (req, res) => {
  const path = paths.get(String(req.query.path || "health")) || paths.get("health");
  const url = new URL(path, "https://api.example.invalid");
  const response = await axios.get(url.toString());
  res.send(response.data);
});
