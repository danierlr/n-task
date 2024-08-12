import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { QuoteRequest } from './models/QuoteRequest'
import { QuoteResponse } from './models/QuoteResponse'
import { ExchangesRateService } from './ExchangeRatesService'

@Injectable()
export class CurrencyExchangeService {
  constructor(private exchangeRateService: ExchangesRateService) {}

  async getQuote(request: QuoteRequest): Promise<QuoteResponse | null> {
    const rates = await this.exchangeRateService.getExchangeRates(request.baseCurrency)

    const exchangeRate = rates.quoteCurrencyRates[request.quoteCurrency]

    if (!exchangeRate) {
      return null
    }

    const quoteAmount = exchangeRate.mul(request.baseAmount).floor()

    return {
      exchangeRate,
      quoteAmount,
    }
  }
}
