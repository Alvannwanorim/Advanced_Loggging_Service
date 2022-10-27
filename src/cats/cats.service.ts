import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getHello(): string {
    return 'hello';
  }
}
