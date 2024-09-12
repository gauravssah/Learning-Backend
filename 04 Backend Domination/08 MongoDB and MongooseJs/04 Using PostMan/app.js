const express = require('express');
const app = express();
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/user');
const debuglog = require('debug')('development:app');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.send("Hello Gauarv");
});

//  This will create a new user in the database
app.post("/create", async (req, res, next) => {
    // res.send(req.body);
    let { username, name, email, password } = req.body;

    let createdUser = await userModel.create({
        name,
        username,
        email,
        password
    });

    // res.send(createdUser._id);
    res.send(createdUser);
});

// This will get all the users from the database
app.get("/users", async (req, res, next) => {
    let users = await userModel.find();
    res.send(users);
});

// This will get a user by username
app.get("/users/:username", async (req, res, next) => {
    let user = await userModel.findOne({ username: req.params.username });
    res.send(user);
});

// This will update a user by username
app.get("/update/:username", async (req, res, next) => {
    let { username, name, email } = req.body;
    let newuser = await userModel.findOneAndUpdate({ username: req.params.username },
        {
            username,
            name,
            email
        }, { new: true });

    res.send(newuser);
});

// This will delete a user by username
app.get("/delete/:username", async (req, res, next) => {
    let deleted = await userModel.findOneAndDelete({ username: req.params.username });
    res.send(deleted);
});

app.listen(3000);

