const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello Gaurav!");
});

app.get("/check", (req, res) => {
    console.log(req.cookies.chcha_banned);
    res.send("Check!");
});

app.get("/banned", (req, res) => {
    res.cookie("chcha_banned", "trueHai");
    res.send("You are banned!");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
