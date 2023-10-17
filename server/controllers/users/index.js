const express = require('express');
const Progress = require('../../models/progress');
const Reviews = require('../../models/review');

const books = require('./routes/books');
const reviews = require('./routes/reviews');
const wishlist = require('./routes/wishlist');
const progress = require('./routes/progress');
const User = require('../../models/user');
const hal9k = require('hal9k');
const Journal = require('../../models/journal');
const router = express.Router();

// READ TESTED
router.get('/', async function (req, res, next) {

    try {
        const users = await User.find(req.query);
        res.json(users)
    }
    catch (error) {
        next(error);
    }

})

// CREATE TESTED
router.post('/', async function (req, res, next) {

    try {
        const user = req.body;
        await User.create(user);
        res.status(201).json(user);
    }
    catch (error) {
        next(error)
    }

})

// READ TESTED
router.get('/:username', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOne({ username });

        let linkedJsonObject = hal9k.resource({
            user
        })
            .link('home', '/api')
            .link('self', `/api/users/${username}`)
            .link('reviews', `/api/users/${username}/reviews`)
            .link('books', `/api/users/${username}/books`)
            .link('progress', `/api/users/${username}/progress`)
            .toJSON();

        res.json(linkedJsonObject);
    }
    catch (error) {
        next(error)
    }

})


// TESTED
router.patch('/:username', async function (req, res, next) {

    try {
        const { username } = req.params;
        const { username:value } = req.body;
        const user = await User.findOneAndUpdate({ username }, { username: value });
        await Progress.findOneAndUpdate({ username }, { username: value })
        await Reviews.updateMany({ username }, { username: value })
        await Journal.updateMany({ username }, { username: value })

        res.json(user);
    }
    catch (error) {
        next(error)
    }

})


// DELETE TESTED
router.delete('/:username', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOneAndDelete({ username });
        res.json(user);
    }
    catch (error) {
        next(error)
    }

})

router.use('/:username/books', books);
router.use('/:username/reviews', reviews);
router.use('/:username/wishlist', wishlist);
router.use('/:username/progress', progress)

module.exports = router
