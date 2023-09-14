

const User = require('../../../models/user');
const express = require('express');
const hal9k = require('hal9k');
const router = express.Router({ mergeParams: true });

// READ
router.get('/', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        const wishlist = user.wishlist;

        let linkedJsonObject = hal9k.resource({
            wishlist
        })
            .link('home', '/api')
            .link('self', `/api/users/${username}/wishlist`)

        res.json(linkedJsonObject)
    }
    catch (error) {
        next(error)
    }

})

// CREATE
router.post('/', async function (req, res, next) {

    try {
        const { username } = req.params;
        const wish = req.body;
        const user = await User.findOneAndUpdate({ username }, req.body, { new: true });
        user.wishlist.push(wish);
        await user.save();
        res.status(201).json(wish);
    }

    catch (error) {
        next(error);
    }

})

// DELETE
router.delete('/:bookId', async function (req, res, next) {

    try {
        const { username, bookId } = req.params;
        const user = await User.findOne({ username });
        user.wishlist.pull({ isbn: bookId });
        await user.save();
        res.json(user.wishlist);
    }
    catch (error) {
        next(error)
    }

})

module.exports = router
