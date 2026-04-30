const axios = require("axios");
const express = require("express");

const app = express();

app.get("/fetch", async (req, res) => {
  const response = await axios.get(String(req.query.url));
  res.send(response.data);
});
