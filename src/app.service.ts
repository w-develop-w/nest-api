// import { Injectable } from '@nestjs/common';
// import { CreateDto } from './dto/create.dto';
// import { DatabaseService } from './database/database.service';

// @Injectable()
// export class AppService {
//   constructor(private readonly databaseService: DatabaseService) {}
//   getHello(): string {
//     return 'Hello World!';
//   }

//   async save(dto: CreateDto) {
//     this.databaseService.post.create({
//       data: dto,
//     });
//   }
// }

import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
  constructor(private readonly databaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async save(dto: CreateDto) {
    return await this.databaseService.create(dto);
  }
}
