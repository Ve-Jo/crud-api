import { Book } from 'src/graphql.schema';
import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getBooks() {
    return this.books;
  }

  getBookById(id: string) {
    return this.books.find((book) => book.id === id);
  }

  createBook(name: string, year: number, author: string) {
    const book = new Book();

    book.id = v4();
    book.name = name;
    book.year = year;
    book.author = author;

    this.books.push(book);

    return book;
  }

  updateBook(id: string, name: string, year: number, author: string) {
    const book = this.books.find((book) => book.id === id);

    if (!book) return null;

    book.name &&= name;
    book.year &&= year;
    book.author &&= author;

    return book;
  }

  deleteBook(id: string) {
    const book = this.books.find((book) => book.id === id);

    if (!book) return null;

    this.books = this.books.filter((book) => book.id !== id);

    return book;
  }
}
