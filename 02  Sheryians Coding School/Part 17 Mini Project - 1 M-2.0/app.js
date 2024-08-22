const express = require("express");
const app = express();
const userModel = require("./models/user");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/register", async (req, res) => {
    // Getting the data from the form
    let { name, username, password, email, age } = req.body;

    // Getting the user from the database
    let user = await userModel.findOne({ email });
    // Checking if the user already exists in the database
    if (user) return res.status(400).send("User already exists");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                name,
                age,
                password: hash
            });

            let token = jwt.sign({ email: user.email, userid: user._id }, "secretkeyshshshssh");
            res.cookie("token", token);
            res.send("User created successfully");
        })
    });
});



});

app.listen(3000);