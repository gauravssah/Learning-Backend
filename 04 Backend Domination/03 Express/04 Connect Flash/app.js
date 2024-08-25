const express = require("express");
const app = express();
const expressSession = require("express-session");
const flash = require("express-flash");

app.use(expressSession({
    secret: "anything that i want",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.get("/", (req, res) => {
    req.flash("error", "invalid Credentials");
    res.redirect("/error");
});

app.get("/error", (req, res) => {
    let message = req.flash("error");
    res.send(message);
})

app.listen(3000);