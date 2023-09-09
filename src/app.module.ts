import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/graphqli',
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [BooksService],
})
export class AppModule {}
