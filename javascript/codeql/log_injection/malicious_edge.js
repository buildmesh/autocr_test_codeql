const http = require("http");
const url = require("url");

function auditMessage(username) {
  return `[AUDIT] user=${username} action=download`;
}

http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  console.warn(auditMessage(q.query.username));
  res.end("ok");
});
