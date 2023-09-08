var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');
const Book = require('./models/book');
const User = require('./models/user');
const Review = require('./models/review');

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/animalDevelopmentDB'; // localhost | 127.0.0.1
var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoURI).catch(function (err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
}).then(() => {
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
});

// Create Express app
var app = express();
// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors());
app.use(cors());

// Import routes
app.get('/api', function (req, res) {
    res.json({ 'message': 'Welcome to your DIT342 backend ExpressJS project!' });
});

app.get('/api/users', async function (req, res) {

    try {
        const users = await User.find();
        res.json(users)
    }
    catch (error) {
        next(error);
    }

})

app.get('/api/reviews', async function (req, res, next) {

    try {
        const reviews = await Review.find();
        res.json(reviews)
    }
    catch (error) {
        next(error)
    }

})

app.get('/api/users/:username/books', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        res.json(user.books);
    }
    catch (error) {
        next(error)
    }

})

app.post('/api/reviews/add', async function (req, res, next) {
    try {
        const review = await Review.create(review);
        res.status(201).json(review);
    }
    catch (error) {
        next(error)
    }
})

// Update pre-selected attributes in a review
app.patch('/api/reviews/username/:username/books/:isbn', async function (req, res, next) {

    try {
        const username = req.params.username;
        const isbn = req.params.isbn;

        const review = await Review.findOneAndUpdate({username: username, isbn: isbn}, req.body, {new: true});
        res.json(review);
    }
    catch (error) {
        next(error)
    }
})

app.delete('/api/users/:username/books/:bookId', async function (req, res, next) {

    try {
        const { username, bookId } = req.params;
        const user = await User.findOne({ username });

        user.books.pull({ isbn: bookId });
        await user.save();
        res.json(user);
    }
    catch (e) {
        next(e)
    }
})

app.post('/api/users/:username/books/add', async function (req, res, next) {

    try {
        const { username } = req.params;
        const book = req.body;
        const user = await User.findOne({ username });

        user.books.push(book);
        await user.save();
        res.json({ books: user.books });
    }
    catch (error) {
        next(error)
    }

})

app.post('/api/users/add', async function (req, res, next) {

    try {
        const user = req.body;
        await User.create(user);
        res.status(201).json(user);
    }
    catch (error) {
        next(error)
    }

})

app.get('/api/users/:username', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOne({ username });
        res.json(user);
    }
    catch (error) {
        next(error)
    }

})

app.delete('/api/users/:username', async function (req, res, next) {

    try {
        const { username } = req.params;
        const user = await User.findOneAndDelete({ username });
        res.status(200).json(user);
    }
    catch (error) {
        next(error)
    }
})


// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});


// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        // Return sensitive stack trace only in dev mode
        err_res['error'] = err.stack;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function (err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend (production): http://localhost:${port}/`);
});

module.exports = app;
