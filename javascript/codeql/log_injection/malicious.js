const http = require("http");
const url = require("url");

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.info(`[INFO] User: ${query.username}`);
  res.end("ok");
});
