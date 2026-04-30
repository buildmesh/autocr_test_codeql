const axios = require("axios");
const express = require("express");

const app = express();
const targets = new Map([["status", "https://status.example.invalid/health"], ["docs", "https://docs.example.invalid/"]]);

app.get("/fetch-safe", async (req, res) => {
  const url = targets.get(String(req.query.target || "status")) || targets.get("status");
  const response = await axios.get(url);
  res.send(response.data);
});
