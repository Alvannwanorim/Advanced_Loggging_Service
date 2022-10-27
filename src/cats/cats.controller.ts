import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { CatsService } from './cats.service';
@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('Calling getHello()', CatsService.name);
    this.logger.debug('Calling getHello()', CatsService.name);
    this.logger.verbose('Calling getHello()', CatsService.name);
    this.logger.warn('Calling getHello()', CatsService.name);

    try {
      throw new Error();
    } catch (e) {
      this.logger.error('Calling getHello()', e.stack, CatsService.name);
    }

    return this.catsService.getHello();
  }
}
