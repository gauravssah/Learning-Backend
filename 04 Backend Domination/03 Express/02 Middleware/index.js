const Express = require("express")
const app = Express()

// This is Middleware

app.use(function (req, res, Next) {
    console.log("Mai Middelwere se aa rah hu.")
    Next();
})

app.use(function (req, res, Next) {
    console.log("I am the second middelware.")
    Next();
})

app.get("/", function (req, res) {
    res.send("Hello, This function is also a Middelware, Because it conatins Next:- function (req, res, Next){}")
})

app.get("/about", (req, res) => {
    res.send("This is about ")
})

app.listen(3000);



