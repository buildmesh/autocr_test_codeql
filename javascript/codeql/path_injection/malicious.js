const fs = require("fs");
const http = require("http");
const url = require("url");

const ROOT = "/srv/app/uploads/";

http.createServer((req, res) => {
  const filePath = url.parse(req.url, true).query.path;
  res.write(fs.readFileSync(ROOT + filePath, "utf8"));
  res.end();
});
