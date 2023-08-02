import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHelloooo(): string {
    console.log('Get message');
    // return this.appService.getHello();
    return 'hello world';
  }

  @Post('create')
  create() {
    console.log('post');
  }
}
