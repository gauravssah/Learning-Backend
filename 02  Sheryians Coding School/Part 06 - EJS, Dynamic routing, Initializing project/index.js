const express = require('express');
const app = express();
const path = require('path');

// setting up parsers for from.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up ejs for ejs pages.
app.set('view engine', 'ejs');

//  setting up public static files.
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render("index")
});

app.get("/profile/gaurav", function (req, res) {
    res.send("chal Raha hai..., only for gaurav");
});

// dynamic routing.
app.get("/profile/:username", function (req, res) {
    // res.send("chal Raha hai...");

    res.send(`This is running for - ${req.params.username}`);
});

app.get("/auther/gs/26", function (req, res) {
    res.send("chal Raha hai...");
});

app.get("/auther/:username/:age", function (req, res) {
    res.send(`This is running for - ${req.params.username} of age :  ${req.params.age}`);
});


app.listen(3000, function () {
    console.log("Running...");
});
