const express = require('express');
const Review = require('../../models/review');
const router = express.Router();

router.get('/', async (req, res) => {

    try {
        const reviews = await Review.find({});
        res.json(reviews)
    }
    catch(error) {
        next(error)
    }

})

router.delete('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        await Review.deleteOne({ _id: id });
        res.sendStatus(200)
    }
    catch(error) {
        next(error)
    }
    
})

router.delete('/', async (req, res) => {

    try {
        await Review.deleteMany({});
        res.sendStatus(200)
    }
    catch(error) {
        next(error)
    }
    
})

module.exports = router;