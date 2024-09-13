const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingadvancedbcommands");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
    age: String,
    email: String,
    isMarried: Boolean

});

module.exports = mongoose.model("user", userSchema);

