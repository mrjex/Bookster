const mongoose = require("mongoose");
const Book = require("./book");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a username"],
            unique: true
        },
            password: {
            type: Number,
            required: true
        },
        age: {
            type: Number,
            required: true,            
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