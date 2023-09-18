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
            type: String, // Book.isbn
            required: true,
        },
        username: {
            type: String, // User
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;