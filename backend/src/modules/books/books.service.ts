import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'db/PrismaService';

@Injectable()

export class BooksService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateBookDto) {

    const bookExists = await this.prisma.books.findFirst({
      where: {
        title: data.title
      }
    })

    if (bookExists) {
      throw new Error("book ja cadastrado");
    }
    const book = await this.prisma.books.create({
      data,
    });

    return book;
  }

  findAll() {
    return this.prisma.books.findMany()
  }
  async remove(id: string) {
    return await this.prisma.books.delete({
      where:{
        id,
      }
    })
  
  }
}
