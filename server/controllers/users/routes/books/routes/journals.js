const Journal = require('../../../../../models/journal');
const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', async function (req, res, next) {

    const { username, isbn } = req.params;
    try {
        res.json(await Journal.find({ isbn, username }))
    }
    catch (e) {
        next(e)
    }
})

router.post('/add', async function (req, res, next) {

    try {
        const journal = await Journal.create(req.body);
        res.status(201).json(journal);
    }
    catch (e) {
        next(e)
    }

})

router.delete('/', async function (req, res, next) {

    try {
        const { username, isbn } = req.params;
        res.json(
            await Journal.findOneAndDelete({
                username, isbn, _id: req.body._id
            }))
    }
    catch (e) {
        next(e)
    }

})

module.exports = router;