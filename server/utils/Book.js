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
        this.description = data.volumeInfo.description?.replace(/<\/?[^>]+(>|$)/g, "");
        this.pages = data.volumeInfo.pageCount;
        this.publishYear = data.volumeInfo.publishedDate;
        this.ratingsCount = data.volumeInfo.ratingsCount || 0;
        this.coverURL = data.volumeInfo.imageLinks?.thumbnail || 'https://i.pinimg.com/1200x/f4/fa/8a/f4fa8a9e155d94cce553cffdc247b493.jpg';
        // if(data.volumeInfo.imageLinks?.extraLarge) {
        //     this.coverURL = data.volumeInfo.imageLinks?.extraLarge
        // }

    }

}