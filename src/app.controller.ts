import { Controller, Get, Post, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { AppService } from './app.service'

@Controller('vcont')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Post('vmet')
  postHello(@Req() request: Request, @Res() response: Response) {
    console.log('QQQQQQQQQQ', request)
    return response.json({ foo: 'bar' }).send()
  }
}
