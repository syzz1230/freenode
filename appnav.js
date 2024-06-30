const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homepage = readFileSync('./navbar-app/index.html');
const homelogo = readFileSync('./navbar-app/image.png');
const homestyle = readFileSync('./navbar-app/style.css'); // Ensure this matches the HTML link
const homelogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  // for home page
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homepage);
    res.end();

    // for about page
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h2>about page</h2>');
    res.end();

    // for style
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homestyle);
    res.end();

    // for logo
  } else if (req.url === '/image.png') {
    res.writeHead(200, { 'content-type': 'image/png' });
    res.write(homelogo);
    res.end();

    // for logic
  } else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homelogic);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Page not Found</h1>');
    res.end();
  }
});

server.listen(2000, () => {
  console.log('Server is listening on port 2000');
});
