const mongoose = require("mongoose");
const Book = require("./book").schema;

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a username"],
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
            type: [Book]
        },

        wishlist: {
            type: [Book],
            required: true
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);
module.exports = User;