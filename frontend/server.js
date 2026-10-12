const http = require('node:http');

const port = process.env.PORT || 3000;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Node.js (frontend)</title>
  <style>
    html, body { height: 100%; margin: 0; }
    body {
      display: grid;
      place-items: center;
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
      background: linear-gradient(135deg, #4c7ab0, #2c4a70);
      color: #fff;
    }
    h1 {
      margin: 0 16px;
      font-size: clamp(1.75rem, 5vw, 3rem);
      font-weight: 600;
      letter-spacing: -0.02em;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Welcome to Node.js (frontend)</h1>
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
