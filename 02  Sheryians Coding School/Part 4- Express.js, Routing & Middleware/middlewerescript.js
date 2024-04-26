const express = require('express')
const app = express()

// Middleware.
// Request and response handling.
// Error handling.

app.use(function (req, res, next) {
    console.log('middleware chala!');
    next();
});

app.use(function (req, res, next) {
    console.log('middleware chala ek or bar!');
    next();
});

app.get('/', (req, res) => {
    res.send("Mai Hu Don....");
});

app.get("/about", function (req, res) {
    res.send("This is a about page.")
});

app.get("/profile", function (req, res, next) {
    // res.send("This is about");
    return next(new Error("Something went wrong")); // This will show in console
});

// Error handling.
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong, we don\'t have any idea.'); // This will show on frontend.
});

app.listen(3000);



