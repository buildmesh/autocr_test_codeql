const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  console.info(`[INFO] User: ${q.query.username}`);
  res.end("ok");
});
