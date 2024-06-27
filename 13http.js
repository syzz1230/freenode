const http = require(`http`);

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to the our home page');
  } else if (req.url === '/about') {
    res.end('here is the shortest history');
  } else {
    res.statusCode = 404;
    res.end(`
        <h1>oops!</h1>
        <p>we cant find the  page you are finding</p>
        <a href = "/">back home</a>
        `);
  }
});
server.listen(5001);
