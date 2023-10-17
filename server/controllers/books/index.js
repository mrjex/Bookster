const BookAPI = require('../../utils/BookAPI');
const Review = require('../../models/review');
const express = require('express');
const hal9k = require('hal9k');
const User = require('../../models/user');
const Book = require('../../utils/Book');
const BookModel = require('../../models/book')
const BookInfo = require('../../models/bookinfo');
const router = express.Router();

// TESTED
router.get('/trending', async (req, res, next) => {

    try {
        const result = await getTrendingBooks()
        res.json(result)
    }
    catch (error) {
        next(error)
    }

})

// READ TESTED
router.get('/', async function (req, res, next) {

    try {

        const { trending } = req.query;
        if (trending) {
            const result = await getTrendingBooks();
            return res.json(result);
        }

        const books = await BookInfo.find({})
        res.json(books)

    }
    catch (error) {
        next(error)
    }

})

// TESTED
router.post('/', async function (req, res, next) {

    try {
        const added = await BookModel.create(req.body)
        res.status(201).json(added)
    }
    catch (error) {
        next(error)
    }

})

// TESTED
router.delete('/', async function (req, res, next) {

    try {
        await User.updateMany({}, {
            $set: {
                books: []
            }
        });

        await BookModel.deleteMany({})
        res.sendStatus(200)
    }
    catch (error) {
        next(error)
    }

})

// READ TESTED
router.get('/search/:keyword', async function (req, res, next) {

    try {
        const { keyword } = req.params;
        const results = await BookAPI.search(keyword);
        res.json(results);
    }
    catch (error) {
        next(error);
    }

})

// TESTED
router.get('/:isbn', async function (req, res, next) {

    const { isbn } = req.params;
    try {
        const fetched = await BookAPI.getBook(isbn)
        await BookInfo.findOneAndUpdate({ isbn }, fetched, { upsert: true })
        const book = await BookInfo.findOne({ isbn });
        const reviews = await Review.find({ isbn })
        res.json({ ...book.toJSON(), reviews })
    }
    catch (error) {
        next(error)
    }

})

// READ TESTED
router.get('/:isbn/reviews', async function (req, res, next) {

    try {
        const { isbn } = req.params;
        const reviews = await Review.find({ isbn: isbn }, req.body);

        let linkedJsonObject = hal9k.resource({
            reviews
        })
            .link('home', '/api')
            .link('self', `/api/books/${isbn}/reviews`)

        res.json(linkedJsonObject)
    }
    catch (error) {
        next(error)
    }

})


async function getTrendingBooks() {
    const current_date = new Date();
    const last_month = new Date().setMonth(current_date.getMonth() - 1)

    const books = new Map();

    // Returns all books of last month
    const all_users = await User.find({ 'books.createdAt': { $gte: last_month.valueOf() } }, 'books');

    // measures frequency of each book
    for (const user of all_users) {
        for (const book of user.books) {
            const data = await BookInfo.findOne({ isbn: book.isbn });
            if (data) {
                const weight = books.get(book.isbn)?.weight || 0;
                books.set(book.isbn, { ...data._doc, weight: weight + 1 });
            }
        }
    }
    return [...books.values()].sort((a, b) => b.weight - a.weight);
}

module.exports = router
