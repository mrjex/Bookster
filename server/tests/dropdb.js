var mongoose = require('mongoose');

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb+srv://admin:123@javascriptexercises-clu.dk25y82.mongodb.net/?retryWrites=true&w=majority';

if (!mongoURI) {
    console.error('Missing MONGODB_URI for dropping test database.');
    process.exit(1);
}

// Drop database
mongoose.connect(mongoURI).catch(function (err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
});
mongoose.connection.dropDatabase().then(function () {
    console.log(`Dropped database: ${mongoURI}`);
    process.exit(0);
});
