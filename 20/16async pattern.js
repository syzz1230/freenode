const http = require(`http`);
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log('home page');
  } else if (req.url === '/about') {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log({ i }, { j });
      }
    }
  } else {
    res.end("about page");
  }
});
server.listen(5000,()=>{
    console.log("server:5000");
})
