import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { CurrencyCode } from './consts/CurrencyCode'
import { CurrencyExchangeService } from './CurrencyExchangeService'
import { supportedCurrencyCodes } from './consts/supportedCurrencies'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  @Get('quote')
  async getQuote(): Promise<string> {
    // const res = await exchangerateApi.getCurrencyExchangeRates('USD')

    // return 'yyyyy' + this.currencyExchangeService.getQuery()
    return ''
  }
}
