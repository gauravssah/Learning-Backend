const express = require("express");
const app = express();
const expressSession = require("express-session");

app.use(expressSession({
    secret: "this must be uniqe",
    resave: false,
    saveUninitialized: false

}))

app.get("/", (req, res) => {
    res.send("Home Section, and we are Learning : express-session")
})

app.get("/create", (req, res, next) => {
    // req.session.polo = true;
    req.session.polo = "heyiam";
    res.send("session created - Done");
})

app.get("/check", (req, res, next) => {
    console.log(req.session.polo);
    res.send("Checked")
    next();
})


app.listen(3000);

