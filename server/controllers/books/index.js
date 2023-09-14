const BookAPI = require('../../utils/BookAPI');
const Review = require('../../models/review');
const express = require('express');
const hal9k = require('hal9k');
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


module.exports = router
