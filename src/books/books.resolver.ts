import { BooksService } from './books.service';
import { Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Mutation()
  createBook(name: string, year: number, author: string) {
    return this.booksService.createBook(name, year, author);
  }

  @Mutation()
  deleteBook(id: string) {
    return this.booksService.deleteBook(id);
  }

  @Mutation()
  updateBook(id: string, name: string, year: number, author: string) {
    return this.booksService.updateBook(id, name, year, author);
  }
}
