import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHelloooo(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new Error('Error');
    }
    return id;
  }

  @Post('create')
  create() {
    console.log('post');
  }
}
