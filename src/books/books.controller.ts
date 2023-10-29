import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { resolveObjectURL } from 'buffer';
import { log } from 'console';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private booksService: BooksService;

  constructor(booksService: BooksService) {
    this.booksService = booksService;
  }

  @Get('/:id')
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Post()
  createBook(@Body() payload: any) {
    console.log(payload);
  }
}
