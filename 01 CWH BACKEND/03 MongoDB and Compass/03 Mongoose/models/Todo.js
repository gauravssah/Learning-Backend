import mongoose from "mongoose";

// const TodoSchema = new mongoose.Schema({
//     title: String,
//     desc: String,
//     isDone: Boolean,
//     days: Number
// });

// We can also pass obj as Schema
const TodoSchema = new mongoose.Schema({
    title: { type: String, require: true, default: "Hay i am default value" },
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema);