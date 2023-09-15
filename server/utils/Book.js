const COVER_URL = 'https://covers.openlibrary.org/b/id';

module.exports = class Book {

    id;
    title;
    author;
    // description;
    coverURL;
    pages;
    publishYear;

    constructor(data) {
        this.id = data.key;
        this.title = data.title;
        this.author =  {
            name: data.author_name,
            id: data.author_key
        };
        // this.description = data;
        this.coverURL = `${COVER_URL}/${data.cover_i}-L.jpg`;
        this.pages = data.number_of_pages_median;
        this.publishYear = data.first_publish_year;
    }

}