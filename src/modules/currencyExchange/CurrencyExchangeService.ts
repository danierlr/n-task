import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { QuoteRequest } from './models/QuoteRequest'
import { QuoteResult } from './models/QuoteResult'
import { ExchangesRateService } from './ExchangeRatesService'

@Injectable()
export class CurrencyExchangeService {
  constructor(private exchangeRateService: ExchangesRateService) {}

  async getQuote(request: QuoteRequest): Promise<QuoteResult | null> {
    if (request.baseAmount.lessThanOrEqualTo(0)) {
      throw new Error('base amount has to be greater than 0')
    }

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
