import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Book } from 'src/graphql.schema';
import { BooksService } from './books.service';

@Resolver()
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query(() => [Book])
  getBooks() {
    return this.booksService.getBooks();
  }

  @Query(() => Book)
  getBookById() {
    return this.booksService.getBooks();
  }

  @Mutation(() => Book)
  createBook(
    @Args('name') name: string,
    @Args('year') year: number,
    @Args('author') author: string,
  ) {
    return this.booksService.createBook(name, year, author);
  }

  @Mutation(() => Boolean)
  deleteBook(@Args('id') id: string) {
    return this.booksService.deleteBook(id);
  }

  @Mutation(() => Book)
  updateBook(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('year') year: number,
    @Args('author') author: string,
  ) {
    return this.booksService.updateBook(id, name, year, author);
  }
}
