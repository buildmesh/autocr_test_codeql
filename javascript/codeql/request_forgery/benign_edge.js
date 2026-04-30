const axios = require("axios");
const express = require("express");

const app = express();

app.get("/fetch-same-origin", async (req, res) => {
  const url = new URL(String(req.query.url || "https://api.example.invalid/health"));
  if (url.protocol !== "https:" || url.hostname !== "api.example.invalid") {
    res.status(400).send("blocked");
    return;
  }
  const response = await axios.get(url.toString());
  res.send(response.data);
});
