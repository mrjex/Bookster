var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');
const Book = require('./models/book');
const User = require('./models/user');

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animalDevelopmentDB';
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

    const users = await User.find({});
    res.json(users)

})

app.get('/api/user/:username/books', async function (req, res) {

    const { username } = req.params;
    const user = await User.findOne({ username });
    res.json(user.books);

})

app.delete('/api/user/:username/books/:bookId', async function (req, res) {

    const { username, bookId } = req.params;
    const user = await User.findOne({ username });

    user.books.pull({ isbn: bookId });
    await user.save();
    res.sendStatus(200);

})

app.post('/api/user/:username/books/add', async function (req, res) {

    const { username } = req.params;
    const book = req.body;
    const user = await User.findOne({ username });

    user.books.push(book);
    await user.save();
    res.json({ books: user.books });

})


app.post('/api/user', async function (req, res) {

    const user = req.body;
    await User.create(user);
    res.sendStatus(200);

})

app.get('/api/user/:username', async function (req, res) {

    const { username } = req.params;
    const user = await User.find({ username });
    res.json(user);

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
