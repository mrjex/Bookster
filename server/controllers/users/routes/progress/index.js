const Progress = require('../../../../models/progress');
const express = require('express');
const router = express.Router({ mergeParams: true });

// NOTE: Path = 'api/users/:username/progress'

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
        const progress = req.body
        await Progress.create(progress)
        res.status(201).json(progress)
    }
    catch (e) {
        next(e)
    }
})

module.exports = router;