const express = require("express");
const app = express();

let data = [1, 2, 3, 4, 5];

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/data", (req, res) => {
    res.send(data);
});

app.post("/data/:num", (req, res) => {
    data.push(parseInt(req.params.num));
    res.send(data);
});

app.listen(3000);

