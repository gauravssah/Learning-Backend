const express = require('express');
const app = express();
const userModel = require('./models/user');

// Dummy data
const dummyData = [
    {
        "username": "johnDoe123",
        "name": "John Doe",
        "password": "password123",
        "age": 28,
        "email": "johndoe@example.com",
        "isMarried": false
    },
    {
        "username": "janeSmith",
        "name": "Jane Smith",
        "password": "qwerty987",
        "age": 32,
        "email": "janesmith@example.com",
        "isMarried": true
    },
    {
        "username": "mikeJones",
        "name": "Mike Jones",
        "password": "securePass456",
        "age": 25,
        "email": "mikejones@example.com",
        "isMarried": false
    },
    {
        "username": "emilyBrown",
        "name": "Emily Brown",
        "password": "emily!Brown78",
        "age": 29,
        "email": "emilybrown@example.com",
        "isMarried": true
    },
    {
        "username": "robertKing",
        "name": "Robert King",
        "password": "kingRobert@789",
        "age": 40,
        "email": "robertking@example.com",
        "isMarried": true
    },
    {
        "username": "lucasHill",
        "name": "Lucas Hill",
        "password": "lucas$hill333",
        "age": 27,
        "email": "lucashill@example.com",
        "isMarried": false
    },
    {
        "username": "sophiaMiller",
        "name": "Sophia Miller",
        "password": "sophiaMiller#55",
        "age": 34,
        "email": "sophiamiller@example.com",
        "isMarried": true
    },
    {
        "username": "davidClark",
        "name": "David Clark",
        "password": "passClark@654",
        "age": 22,
        "email": "davidclark@example.com",
        "isMarried": false
    },
    {
        "username": "oliviaLewis",
        "name": "Olivia Lewis",
        "password": "olivia_Lewis12",
        "age": 30,
        "email": "olivialewis@example.com",
        "isMarried": true
    },
    {
        "username": "noahYoung",
        "name": "Noah Young",
        "password": "noah_Young99",
        "age": 31,
        "email": "noahyoung@example.com",
        "isMarried": false
    },
    {
        "username": "avaWalker",
        "name": "Ava Walker",
        "password": "avaWalker!75",
        "age": 26,
        "email": "avawalker@example.com",
        "isMarried": true
    },
    {
        "username": "liamHarris",
        "name": "Liam Harris",
        "password": "liamHarris@890",
        "age": 33,
        "email": "liamharris@example.com",
        "isMarried": false
    },
    {
        "username": "ellaScott",
        "name": "Ella Scott",
        "password": "ella$Scott!567",
        "age": 35,
        "email": "ellascott@example.com",
        "isMarried": true
    },
    {
        "username": "benjaminWhite",
        "name": "Benjamin White",
        "password": "ben@White789",
        "age": 42,
        "email": "benjaminwhite@example.com",
        "isMarried": true
    },
    {
        "username": "miaGreen",
        "name": "Mia Green",
        "password": "mia_Green!100",
        "age": 24,
        "email": "miagreen@example.com",
        "isMarried": false
    }
]

// This is the root route
app.get("/", (req, res) => {
    res.send("Hello Gauarv");
});

// This is insertMany method to insert multiple documents at once
app.get("/createmany", async (req, res) => {
    let data = await userModel.insertMany(dummyData);
    res.send(data);
});

// This is find method to find documents
app.get("/users", async (req, res) => {
    let users = await userModel.find({ age: 25 });
    res.send(users);
});

// ------( eq )------
app.get("/users/eq/:age", async (req, res) => {
    let users = await userModel.find({ age: { $eq: req.params.age } });
    res.send(users);
});

// ------( ne )------
app.get("/users/ne/:age", async (req, res) => {
    let users = await userModel.find({ age: { $ne: req.params.age } });
    res.send(users);
});

// ------( gt )------
app.get("/users/gt/:age", async (req, res) => {
    let users = await userModel.find({ age: { $gt: req.params.age } });
    res.send(users);
});

// ------( lt )------
app.get("/users/lt/:age", async (req, res) => {
    let users = await userModel.find({ age: { $lt: req.params.age } });
    res.send(users);
});

// ------( lte )------
app.get("/users/lte/:age", async (req, res) => {
    let users = await userModel.find({ age: { $lte: req.params.age } });
    res.send(users);
});


// ------( gte )------
app.get("/users/gte/:age", async (req, res) => {
    let users = await userModel.find({ age: { $gte: req.params.age } });
    res.send(users);
});

// ------( in )------
app.get("/users/in", async (req, res) => {
    let users = await userModel.find({ age: { $in: [25, 30, 27] } });
    res.send(users);
});

// ------( nin )------
app.get("/users/nin", async (req, res) => {
    let users = await userModel.find({ isMarried: { $nin: [false] } });
    res.send(users);
});

// ------( exists )------
app.get("/users/exists", async (req, res) => {
    let users = await userModel.find({ isAdmin: { $exists: false } });
    res.send(users);
});

// ------( and )------
app.get("/users/and", async (req, res) => {
    let users = await userModel.find({ $and: [{ age: { $gte: 25 } }, { isMarried: false }] });
    res.send(users);
});

// ------( or )------
app.get("/users/or", async (req, res) => {
    let users = await userModel.find({ $or: [{ age: { $gte: 35 } }, { isMarried: false }] });
    res.send(users);
});

// ------( regex )------
app.get("/users/regex", async (req, res) => {
    let users = await userModel.find({ name: { $regex: /^d.*rk$/i } });
    res.send(users);
});

// Explanation:
// ^d: The name must start with the letter 'd'.
// .*: Matches any characters in between.
// rk$: The name must end with 'rk'.
// i: Case-insensitive matching.

// ----------------------





app.listen(3000);

