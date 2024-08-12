import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common'
import { Request, Response } from 'express'
import { CurrencyCode } from './consts/CurrencyCode'
// import { RootService } from './rootService'

import { exchangerateApi } from './apis/exchangerate/exchangerateApi'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor() {}

  private supportedCurrencyCodes: Set<CurrencyCode> = new Set(Object.values(CurrencyCode))

  @Get('quote')
  async getQuote(): Promise<string> {
    const res = await exchangerateApi.getCurrencyExchangeRates('USD')

    const x = res.rates['USD']
    const y = res.rates['AED']

    return 'yyyyy' + x.plus(y)
  }
}
