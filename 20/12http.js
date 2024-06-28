const http = require(`http`);

const server  = http.createServer((req,res)=>{
    res.write("welcomer to my first project")
    res.end();
})
server.listen(5000);