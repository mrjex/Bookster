const mongoose = require("mongoose");
const User = require("./user");
const Book = require("./book");

const reviewSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        isbn: {
            type: Book.isbn,
            required: true,            
        },
        username: {
            type: User
        }
    },
    {
        timestamps: true
    }
)

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;