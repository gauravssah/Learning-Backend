const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
});

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "Gaurav shonik",
        email: "gauravshonik@gs.com",
        username: "gauravshonik"
    });
    res.send(createduser);
});

app.get('/update', async (req, res) => {
    // userModel.findOneAndUpdate(findone, update, { new: true });
    let updatedUser = await userModel.findOneAndUpdate({ username: "gauravssah" }, { name: "Gaurav Sah" }, { new: true });
    res.send(updatedUser);
});

app.get('/read', async (req, res) => {

    /*  
        find() , gives array
        findOne(), gives object.
    */

    // let users = await userModel.find({ username: "gauravshonik" });
    // let users = await userModel.find({ username: "gauravshonik01" });  // if not founde the always gives and array --> []
    // let users = await userModel.findOne({ username: "gauravssah" });
    // let users = await userModel.findOne({ username: "gauravssah01" });  // its give null when not found!

    let users = await userModel.find();
    res.send(users);
});

app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: "gauravshonik" });
    res.send(deletedUser);
});



app.listen(3000);