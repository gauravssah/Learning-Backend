import mongoose from "mongoose";

const momgoose = require("mongoose");

const todoschema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }

    ]  // Array of SubTodos

}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoschema);


