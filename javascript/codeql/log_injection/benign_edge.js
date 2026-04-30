const express = require("express");

const app = express();

app.get("/audit-json", (req, res) => {
  console.info("audit=%s", JSON.stringify({ actor: req.get("X-Actor") || "anonymous" }));
  res.send("ok");
});
