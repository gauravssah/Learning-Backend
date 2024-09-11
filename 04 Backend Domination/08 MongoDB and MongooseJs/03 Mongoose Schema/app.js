const express = require('express');
const app = express();
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/user');
const debuglog = require('debug')('development:app');

app.get('/', (req, res) => {
    res.send('Hello World!');
});



// create a user using the usermodel
app.get("/create", async (req, res) => {
    let createduser = await userModel.create({
        username: "gauravtesting",
        name: "gaurav",
        email: "testmail@g.com",
        password: "test"
    });

    debuglog("user created : ", createduser);
    res.send(createduser);
});

// get users from the database
app.get("/read", async (req, res) => {
    // let user = await userModel.findOne({ username: "gauravtesting" });  // This will return the user with username "gauravtesting"
    let users = await userModel.find({});  // This will return all the users in the database
    res.send(user);
    debuglog("users read : ", users);
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
