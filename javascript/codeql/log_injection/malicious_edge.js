const http = require("http");
const url = require("url");

function auditMessage(username) {
  return `[AUDIT] user=${username} action=download`;
}

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.warn(auditMessage(query.username));
  res.end("ok");
});
