const User = require('../../../../models/user');
const hal9k = require('hal9k');
const express = require('express');
const router = express.Router({ mergeParams: true });
const journalRouter = require('./routes/journals');
const BookApi = require('../../../../utils/BookAPI');
const Book = require('../../../../utils/Book');
const BookInfo = require('../../../../models/bookinfo');

// READ TESTED
router.get('/', async (req, res, next) => {

    try {
        const { username } = req.params;
        const { sort, author } = req.query;
        const user = await User.findOne({ username });
        const booksToSort = user.books
            .sort((a, b) => a.title - b.title)
            .filter(book => !author || book.author == author)

        let books = sort == 'desc' ? booksToSort : booksToSort.reverse();
        const fetched_books = [];
        for (const book of books) {
            const added = await BookInfo.findOne({ isbn: book.isbn });
            if(added) {
                fetched_books.push({ ...added._doc });
            }
        }
        let linkedJsonObject = hal9k.resource({
            books: fetched_books
        })
            .link('home', '/api')
            .link('self', `/api/users/${username}/books`)
            .link('book', `/api/users/${username}/books/ISBN`)

        res.json(linkedJsonObject)
    }
    catch (error) {
        next(error)
    }

})

// DELETE
router.delete('/:bookId', async function (req, res, next) {

    try {
        const { username, bookId } = req.params;
        const user = await User.findOne({ username });

        user.books.pull({ isbn: bookId });
        await user.save();
        res.json(user);
    }
    catch (error) {
        next(error)
    }
})

// CREATE TESTED
router.post('/', async function (req, res, next) {

    try {
        const { username } = req.params;
        const book = req.body;
        const user = await User.findOne({ username });

        // fetch the book and save it to cache
       const fetched = await BookApi.getBook(book.isbn)
        
        await BookInfo.findOneAndUpdate({ isbn: book.isbn }, fetched, { upsert: true })

        user.books.push(book);
        await user.save();
        res.status(201).json(book);
    }
    catch (error) {
        next(error)
    }

})

router.use('/:isbn/journals', journalRouter)

module.exports = router;