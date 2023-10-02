const mongoose = require("mongoose");

const bookInfoSchema = mongoose.Schema(
    {
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        title: {
            type: String,
            required: true
        },
        coverURL: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const BookInfo = mongoose.model("BookInfo", bookInfoSchema);

module.exports = BookInfo;