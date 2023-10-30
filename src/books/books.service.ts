import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBooks(): any[] {
    return this.books;
  }
  createBook(title: string, author: string, category: string) {
    this.books.push({ title, author, category });
    return this.books;
  }
}
