import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('vcont')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('vmet')
  postHello(): string {
    return 'eeeee'
  }
}
