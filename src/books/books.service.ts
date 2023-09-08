import { Injectable } from '@nestjs/common';
import { Book } from 'src/graphql.schema';
import { v4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  getBooks() {
    return this.books;
  }

  createBook(name: string, year: number, author: string) {
    const new_book = { name, year, author, id: v4() };
    this.books.push(new_book);
    return new_book;
  }

  updateBook(id: string, name: string, year: number, author: string) {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      book.name = name;
      book.year = year;
      book.author = author;
    }
    return book;
  }

  deleteBook(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
