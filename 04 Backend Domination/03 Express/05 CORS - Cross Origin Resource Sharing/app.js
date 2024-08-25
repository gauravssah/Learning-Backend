const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors()); // It will allow all the origins to access the server.

app.get("/", (req, res) => {
    res.send("Hey, How are you?")
})


// This will allow only specific origins to access the server.
app.get("/shareble", cors(), (req, res) => {
    res.send("Hey, This is shareble.")
})

app.listen(3000);
