const Book = require('./Book');
const google = require('@googleapis/books');
const books = google.books('v1')


module.exports = class BookAPI {

    static async search(keyword) {
        const result = await books.volumes.list({ q: keyword })
        return result.data.items.map(item => new Book(item)).sort((a, b) => b.ratingsCount - a.ratingsCount);
    }

}