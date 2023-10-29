import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks(): any[] {
    return this.books;
  }
}
