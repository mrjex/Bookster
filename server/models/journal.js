const mongoose = require("mongoose");
const User = require("./user").schema;
const Book = require("./book");

const journalSchema = mongoose.Schema(
    {
        notes: {
            type: String,
            required: true
        },
        isbn: {
            type: String, // Book.isbn
            required: true
        },
        username: {
            type: String,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Journal = mongoose.model("Journal", journalSchema);
module.exports = Journal;