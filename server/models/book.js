const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a book title"]
        },
        author: {
            type: String,
            required: true
        },
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        // pages: {
        //     type: Number,
        //     required: true
        // }
    },
    {
        timestamps: true
    }
)

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;