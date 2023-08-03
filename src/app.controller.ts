import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHelloooo(@Param('id', ParseIntPipe) id: number) {
    if (id < 1) {
      throw new BadRequestException('Id must be more 0');
    }
    return id;
  }

  // pipe for validation
  @UsePipes(new ValidationPipe())
  @Post('create')
  create(@Body() dto: CreateDto): CreateDto {
    console.log('post');
    return dto;
  }
}
