const Journal = require('../../../../../models/journal');
const express = require('express');
const router = express.Router({ mergeParams: true });

// TESTED
router.get('/', async function (req, res, next) {

    const { username, isbn } = req.params;
    try {
        res.json(await Journal.find({ isbn, username }))
    }
    catch (e) {
        next(e)
    }
})

// TESTED
router.post('/', async function (req, res, next) {

    try {
        const journal = await Journal.create(req.body);
        res.status(201).json(journal);
    }
    catch (e) {
        next(e)
    }

})

// TESTED
router.delete('/:id', async function (req, res, next) {

    try {
        const { username, isbn, id } = req.params;
        res.json(
            await Journal.findOneAndDelete({
                username, isbn, _id: id
            }))
    }
    catch (e) {
        next(e)
    }

})

module.exports = router;