import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { CurrencyCode } from './consts/CurrencyCode'
import { CurrencyExchangeService } from './currencyExchangeService'
// import { RootService } from './rootService'

import { exchangerateApi } from './apis/exchangerate/exchangerateApi'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  private supportedCurrencyCodes: Set<CurrencyCode> = new Set(Object.values(CurrencyCode))

  @Get('quote')
  async getQuote(): Promise<string> {
    // const res = await exchangerateApi.getCurrencyExchangeRates('USD')

    return 'yyyyy' + this.currencyExchangeService.getQuery()
  }
}
