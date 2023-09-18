const axios = require('axios').default;
const Book = require('./Book');
const API_URL = `https://openlibrary.org`

module.exports = class BookAPI {


    static async search(keyword) {
        const response = await axios.get(`${API_URL}/search.json?q=${keyword}`);
        return response.data.docs.map(doc => new Book(doc))
    }

    static async getBook(isbn) {
        const response = await axios.get(`${API_URL}/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
        return response.data;
    }

}