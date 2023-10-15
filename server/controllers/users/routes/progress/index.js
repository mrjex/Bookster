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
router.post('/', async function (req, res, next) {

    try {
        const progress = req.body
        await Progress.create(progress)
        res.status(201).json(progress)
    }
    catch (e) {
        next(e)
    }
})

// UPDATE
router.put('/', async function (req, res, next) {
    try {
        const { username } = req.params;
        const progress = await Progress.findOneAndUpdate({username: username}, req.body, {new: false})
        res.json(progress)
    }
    catch (error) {
        next(error)
    }
})

module.exports = router;