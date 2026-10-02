const http = require('node:http');

const port = process.env.PORT || 3000;

const html = `<html>
<body style="background-color: #4c7ab0">
<h1 style="color:#000000">Hello world Frontend!</h1>
<a href="/cms">CMS</a><br>
<a href="/api">API</a>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end();
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(req.method === 'HEAD' ? undefined : html);
});

server.listen(port, () => {
  console.log(`Frontend listening on port ${port}`);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
