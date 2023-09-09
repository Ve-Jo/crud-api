
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Book {
    id: string;
    name: string;
    year: number;
    author: string;
}

export abstract class IQuery {
    abstract getBooks(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract getBookById(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createBook(name: string, year: number, author: string): Book | Promise<Book>;

    abstract updateBook(id: string, name: string, year: number, author: string): Nullable<Book> | Promise<Nullable<Book>>;

    abstract deleteBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

type Nullable<T> = T | null;
