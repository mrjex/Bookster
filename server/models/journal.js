const mongoose = require("mongoose");
const User = require("./user");
const Book = require("./book");

const journalSchema = mongoose.Schema(
    {
        notes: {
            type: String,
            required: true
        },
        isbn: {
            type: String, // Book.isbn
            required: true,
            unique: true
        },
        username: {
            type: User
        }
    },
    {
        timestamps: true
    }
)

const Journal = mongoose.model("Journal", journalSchema);
module.exports = Journal;