const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello Guarav Bhai.");
});

server.listen(3000);