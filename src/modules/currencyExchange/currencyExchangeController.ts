import { Controller, Get, Post, Req, Res, Query, Body, ValidationPipe } from '@nestjs/common'
import { Request, Response } from 'express'
import { CurrencyCode } from './consts/CurrencyCode'
import { CurrencyExchangeService } from './CurrencyExchangeService'
import { supportedCurrencyCodes } from './consts/supportedCurrencies'
import { QuoteQueryDto } from './dtos/QuoteQueryDto'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  @Get('quote')
  async getQuote(@Query(new ValidationPipe()) query: QuoteQueryDto): Promise<string> {
    console.log('QQQQ', query)

    // if( supportedCurrencyCodes.has)

    // const res = await exchangerateApi.getCurrencyExchangeRates('USD')

    // return 'yyyyy' + this.currencyExchangeService.getQuery()
    return JSON.stringify(query)
  }
}
