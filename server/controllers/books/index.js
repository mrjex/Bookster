const BookAPI = require('../../utils/BookAPI');
const Review = require('../../models/review');
const express = require('express');
const hal9k = require('hal9k');
const User = require('../../models/user');
const Book = require('../../utils/Book');
const BookInfo = require('../../models/bookinfo');
const router = express.Router();

// READ
router.get('/', async function (req, res, next) {

    let booksFromAPI = "Retrieve books from API here!";
    let linkedJsonObject = hal9k.resource({
        booksFromAPI
    })
        .link('home', '/api')
        .link('self', '/api/books')
        .link('self', '/api/books/ISBN/reviews')

    res.json(linkedJsonObject)

})

// READ
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

// READ
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

router.get('/trending', async (req, res) => {

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

    const result = [...books.values()].sort((a, b) => b.weight - a.weight);

    res.json(result)

})

module.exports = router
