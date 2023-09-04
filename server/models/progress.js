const mongoose = require("mongoose");
const User = require("./user");
const Book = require("./book");

const progressSchema = mongoose.Schema(
    {
        todayDuration: {
            type: Number,
            required: true
        },
        expectedyDuration: {
            type: Number,
            required: true
        },
        isbn: {
            type: Book.isbn,
            required: true,            
        },
        pages: {
            type: Number,
            required: true
        },
        username: {
            type: User
        }
    },
    {
        timestamps: true
    }
)

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;