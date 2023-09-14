

const Review = require('../../../models/review');
const express = require('express');
const hal9k = require('hal9k');
const router = express.Router({ mergeParams: true});

// CREATE
router.post('/add', async function (req, res, next) {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    }
    catch (error) {
        next(error)
    }
})


// READ
router.get('/', async function (req, res, next) {
    try {
        const { username } = req.params;
        const reviews = await Review.find({ username: username }, req.body);

        let linkedJsonObject = hal9k.resource({
            reviews
        })
            .link('home', '/api')
            .link('self', `/api/users/${username}/reviews`)
            .link('self', `/api/users/${username}/reviews/books/ISBN`)

        res.json(linkedJsonObject)
    }
    catch (error) {
        next(error)
    }
})

// UPDATE
router.patch('/:isbn', async function (req, res, next) {

    try {
        const { username, isbn } = req.params;
        const review = await Review.findOneAndUpdate({ username: username, isbn: isbn }, req.body, { new: true });
        res.json(review);
    }
    catch (error) {
        next(error)
    }
})

module.exports = router
