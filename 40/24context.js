const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {  // Corrected to req.url
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h2>home page</h2>');
    res.end();
  } else if (req.url === '/about') {  // Corrected to req.url
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h2>about page</h2>');  // Corrected message
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h2>not found</h2>');
    res.end();
  }
});

server.listen(2000, () => {
  console.log('Server is listening on port 2000');
});
