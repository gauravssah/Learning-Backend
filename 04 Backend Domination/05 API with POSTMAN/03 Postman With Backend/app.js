const express = require("express");
const app = express();

let data = [1, 2, 3, 4, 5];

app.get("/", (req, res) => {
    res.send("Hello Gaurav!");
});

app.get("/data", (req, res) => {
    res.send(data);
});

app.post("/data/:num", (req, res) => {
    data.push(parseInt(req.params.num));
    res.send(data);
});

// This is for testing purpose

app.get("/api/testing/development", (req, res) => {
    res.send("Hello Gaurav in development!");
});

app.get("/api/testing/development/user", (req, res) => {
    res.send("Hello Gaurav in development user!");
});

app.listen(3000);

