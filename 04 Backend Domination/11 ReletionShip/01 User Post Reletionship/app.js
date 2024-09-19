const express = require('express');
// const userandpostModule = require('./models/user_model_post_model');
const userModule = require('./models/user');
const postModule = require('./models/post');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users", async (req, res) => {
    const { username, email, password } = req.body;
    let createdUser = await userModule.create({
        username,
        email,
        password
    })

    res.send(createdUser);
});

app.post("/:username/create/posts", async (req, res) => {
    let user = await userModule.findOne({ username: req.params.username });

    let createdPost = await postModule.create({
        content: "mai ki kara... 2.0  ---",
        user: user._id
    });

    user.posts.push(createdPost._id);
    await user.save();

    res.send({ user, createdPost });
});

app.get("/posts", async (req, res) => {
    // let posts = await postModule.find();

    let posts = await postModule.find({}).populate("user");

    res.send(posts);

});

app.get("/users", async (req, res) => {

    // let users = await userModule.find();

    let users = await userModule.find({}).populate("posts");

    res.send(users);

});














// -----> This done when user and post are in same file <-----

// app.post("/:username/create/posts", async (req, res) => {
//     let user = await userModule.findOne({ username: req.params.username });
//     user.posts.push({
//         content: "mai ki kara... 2.0  ---",
//         date: new Date()
//     });
//     await user.save();
//     console.log(user);
//     res.send(user);
// });


app.listen(3000);
