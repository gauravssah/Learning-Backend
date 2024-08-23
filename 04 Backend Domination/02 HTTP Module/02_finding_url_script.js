const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("About : Here is our short history");
    } else if (req.url === "/contact") {
        res.end("We'd love to hear from you");
    } else if (req.url === "/products") {
        res.end("Our products");
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back Home</a>
        `)
    }
});

server.listen(3000);
console.log("Server listening on port 3000");