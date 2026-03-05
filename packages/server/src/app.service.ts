import { Injectable } from '@nestjs/common';
import { test } from '@lowcode/share';

@Injectable()
export class AppService {
  getHello(): string {
    return `${test()}`;
  }
}
