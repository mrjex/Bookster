const express = require('express');
const Review = require('../../models/review');
const router = express.Router();

router.get('/', async (req, res) => {

    const reviews = await Review.find({});
    res.json(reviews)

})

router.delete('/', async (req, res) => {

    await Review.deleteMany({});
    res.sendStatus(200)

})

module.exports = router;