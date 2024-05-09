const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

const userSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required!"], // Alos can write custome Error Message.
        }

    }, { timestamps: true }


);

export const User = mongoose.model("User", userSchema);


