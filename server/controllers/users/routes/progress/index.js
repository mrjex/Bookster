const Progress = require('../../../../models/progress');
const express = require('express');
const router = express.Router({ mergeParams: true });

// READ
router.get('/', async function (req, res, next) {

    try {
        res.json(await Progress.find({ username: req.params.username }))
    }
    catch (e) {
        next(e)
    }
})

// CREATE
router.post('/add', async function (req, res, next) {

    try {
        res.status(201).json(await Progress.create(req.body));
    }
    catch (e) {
        next(e)
    }

})

module.exports = router;