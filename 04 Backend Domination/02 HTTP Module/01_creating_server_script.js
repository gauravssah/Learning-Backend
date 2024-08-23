const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("My first server script! ");
});

server.listen(3000);

console.log("Server listening on port 3000");

