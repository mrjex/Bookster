const mongoose = require("mongoose");
const Book = require("./book").schema;

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true,
        },
        books: {
            type: [Book],
            default: []
        },

        wishlist: {
            type: [Book],
            default: []
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;