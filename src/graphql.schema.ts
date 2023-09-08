
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Book {
    id?: Nullable<string>;
    name?: Nullable<string>;
    year?: Nullable<number>;
    author?: Nullable<string>;
}

export abstract class IQuery {
    abstract getBooks(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract books(): Nullable<Nullable<Book>[]> | Promise<Nullable<Nullable<Book>[]>>;

    abstract bookById(id?: Nullable<string>): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    abstract createBook(name?: Nullable<string>, year?: Nullable<number>, author?: Nullable<string>): Nullable<Book> | Promise<Nullable<Book>>;

    abstract updateBook(id?: Nullable<string>, name?: Nullable<string>, year?: Nullable<number>, author?: Nullable<string>): Nullable<Book> | Promise<Nullable<Book>>;

    abstract deleteBook(id?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
