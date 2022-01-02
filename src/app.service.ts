import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(typeof process.env.DB_LOCAL)
    return 'Hello World!';
  }
}
