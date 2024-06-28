const http = require(`http`);
const fs = require(`fs`);

http
  .createServer(function (req, res) {
    const Text = fs.readFileSync('./content/big.txt', 'utf8');
    res.end(Text);
  })
  .listen(5000);
