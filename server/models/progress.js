const mongoose = require("mongoose");
const User = require("./user").schema;
const Book = require("./book");

const progressSchema = mongoose.Schema(
    {
        todayDuration: {
            type: Number,
            required: true
        },
        isbn: {
            type: String, // Book.isbn
            required: true,
        },
        username: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Progress = mongoose.model("Progress", progressSchema);
module.exports = Progress;