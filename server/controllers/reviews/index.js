const express = require('express');
const Review = require('../../models/review');
const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        const reviews = await Review.find({});
        res.json(reviews)
    }
    catch (error) {
        next(error)
    }

})

router.delete('/:id', async (req, res, next) => {

    try {
        const id = req.params.id;
        await Review.deleteOne({ _id: id });
        res.sendStatus(200)
    }
    catch (error) {
        next(error)
    }

})

router.delete('/', async (req, res, next) => {

    try {
        const { username } = req.body;
        await Review.deleteMany({ username });
        res.sendStatus(200)
    }
    catch (error) {
        next(error)
    }

})

router.put('/:id', async (req, res, next) => {

    try {
        const { id } = req.params;
        const payload = req.body;
        const result = await Review.findOneAndUpdate({ _id: id }, payload);
        res.status(201).json(result)
    }
    catch (error) {
        next(error)
    }

})

module.exports = router;