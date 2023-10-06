const Book = require('./Book');
const google = require('@googleapis/books');
const books = google.books({
    version: 'v1',
    auth: 'AIzaSyConG59jCvcc1qFu6OmFmk7SCgkb6PF1_A'
})

module.exports = class BookAPI {

    static async getBook(isbn) {
        const result = await books.volumes.get({ volumeId: isbn })
        return new Book(result.data);
    }

    static async searchBook(keyword) {
        const result = await books.volumes.list({ q: keyword })
        return result.data.items ? result.data.items[0] : null;
    }

    static async search(keyword) {
        try {
            const result = await books.volumes.list({ q: keyword })
            return result.data.items.map(item => new Book(item)).sort((a, b) => b.ratingsCount - a.ratingsCount).splice(0, 4);
        }
        catch(error) {
            console.error(error)
            return [];
        }
    }

}