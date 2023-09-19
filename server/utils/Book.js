module.exports = class Book {

    id;
    title;
    author;
    description;
    coverURL;
    pages;
    publishYear;
    ratingsCount = 0;

    constructor(data) {
        this.id = data.id;
        this.title = data.volumeInfo.title;
        this.description = data.volumeInfo.description;
        this.pages = data.volumeInfo.pageCount;
        this.publishYear = data.volumeInfo.publishedDate;
        this.ratingsCount = data.volumeInfo.ratingsCount || 0;
        if (data.volumeInfo.imageLinks) {
            this.coverURL = data.volumeInfo.imageLinks.thumbnail;
        }
        
    }

}