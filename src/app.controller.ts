import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
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
  postHello(@Req() request: Request, @Res() response: Response, @Query() query: any, @Body() body: any) {
    console.log('QQQQQQQQQQ', query, body)
    return response.json({ foo: 'bar' }).send()
  }
}
