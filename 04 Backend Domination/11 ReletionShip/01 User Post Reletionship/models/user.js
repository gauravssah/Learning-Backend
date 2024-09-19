const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/userpostrelationship");

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],

});

const User = mongoose.model('User', userSchema);

module.exports = User;