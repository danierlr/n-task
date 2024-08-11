import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { RootService } from './rootService'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor() {}

  @Get('quote')
  getHello(): string {
    return 'yyyyy'
  }
}
