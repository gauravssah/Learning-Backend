const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingdbreference");

const postSchema = mongoose.Schema({
    content: String,
    data: {
        type: Date,
        default: Date.now()
    }
})


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    posts: [postSchema],



    // posts: [
    //     {
    //         content: String,
    //         date: {
    //             type: Date,
    //             default: Date.now()
    //         }
    //     }
    // ]


});

const User = mongoose.model('User', userSchema);

module.exports = User;