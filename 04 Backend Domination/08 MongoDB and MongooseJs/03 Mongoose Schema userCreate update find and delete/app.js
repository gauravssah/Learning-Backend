const express = require('express');
const app = express();
const mongooseconnection = require('./config/mongoose');
const userModel = require('./models/user');
const debuglog = require('debug')('development:app');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// #------------------------#----------------------#
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

// #------------------------#----------------------#
// get users from the database
app.get("/read", async (req, res) => {
    // let user = await userModel.findOne({ username: "gauravtesting" });  // This will return the user with username "gauravtesting"
    let users = await userModel.find({});  // This will return all the users in the database
    res.send(users);
    debuglog("users read : ", users);
});

// #------------------------#----------------------#
//  update a user in the database
app.get("/update", async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate(
        {
            username: "gauravsah"
        },
        {
            name: "gaurav updated",
            email: "updating@email.com",
            password: "update2.0@123",
            // username: "gauravsahnew"

        }, { new: true });

    res.send(updateduser);
    debuglog("user updated : ", updateduser);

});

// #------------------------#----------------------#
// delete a user from the database

app.get("/delete", async (req, res) => {
    let deleteduser = await userModel.findOneAndDelete({ username: "gauravtesting" });
    res.send(deleteduser);
    debuglog("user deleted : ", deleteduser);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
