// import { INestApplication, Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// // Injectable - decorator for useing our class how provider
// @Injectable()
// export class DatabaseService extends PrismaClient {
//   // connect to db
//   async onOnModuleInit() {
//     await this.$connect();
//   }

//   // disconnect from db
//   async onModuleDestroy() {
//     await this.$disconnect();
//   }

//   async enableShutdownHooks(app: INestApplication) {
//     this.$on('beforeExit', async () => {
//       await app.close();
//     });
//   }
// }

// import { INestApplication, Injectable } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class DatabaseService {
//   private prisma: PrismaClient;

//   constructor() {
//     this.prisma = new PrismaClient();
//   }

//   // connect to db
//   async onOnModuleInit() {
//     await this.prisma.$connect();
//   }

//   // disconnect from db
//   async onModuleDestroy() {
//     await this.prisma.$disconnect();
//   }

//   async enableShutdownHooks(app: INestApplication) {
//     process.on('beforeExit', async () => {
//       await app.close();
//     });
//   }
// }

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // connect to db
  async onOnModuleInit() {
    await this.prisma.$connect();
  }

  // disconnect from db
  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  async create(data: any) {
    return this.prisma.post.create({ data });
  }
}
