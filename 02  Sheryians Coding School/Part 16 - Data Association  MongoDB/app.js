const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");


app.get("/", (req, res) => {
    res.send("Gaurav sah");
});

app.get("/create", async (req, res) => {
    let user = await userModel.create({
        username: "Gaurav Sha",
        age: 25,
        email: "gauravsah@gmail.com"
    })

    res.send(user);

});

app.get("/post/create", async (req, res) => {
    let post = await postModel.create({
        postdata: "Hello, How are you?",
        user: "66305cdf0a0a97006fda0b5b",
    })

    let user = await userModel.findOne({ _id: "66305cdf0a0a97006fda0b5b" });
    user.posts.push(post._id);
    await user.save();
    res.send({ post, user });

});

app.listen(3000);