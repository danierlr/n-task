import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { RootService } from './rootService'

@Controller('vcont')
export class RootController {
  constructor(private readonly appService: RootService) {}

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
