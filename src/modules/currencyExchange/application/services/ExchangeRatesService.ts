import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ExchangeRates } from '../models/ExchangeRates'
import { CurrencyCode } from '../../consts/CurrencyCode'
import { exchangerateApi } from '../../data/apis/exchangerate/exchangerateApi'
import { withCache, CacheLru, Cache } from '../utils/cache'

@Injectable()
export class ExchangesRateService {
  constructor(private configService: ConfigService) {
    const cacheMaxSize = this.configService.get<number>('CURRENCY_RATES_CACHE_SIZE')!
    const cacheTtl = this.configService.get<number>('CURRENCY_RATES_CACHE_TTL_MS')!

    this._cache = new CacheLru(cacheMaxSize, cacheTtl)

    this.getExchangeRates = withCache(this.getExchangeRates.bind(this), this._cache, (baseCurrency) => baseCurrency)
  }

  private readonly _cache: Cache<CurrencyCode, Promise<ExchangeRates>>

  async getExchangeRates(baseCurrency: CurrencyCode): Promise<ExchangeRates> {
    const apiRates = await exchangerateApi.getCurrencyExchangeRates(baseCurrency)

    const result: ExchangeRates = {
      baseCurrency,
      quoteCurrencyRates: {},
    }

    Object.values(CurrencyCode).forEach((currency) => {
      if (apiRates.rates[currency]) {
        result.quoteCurrencyRates[currency] = apiRates.rates[currency]
      }
    })

    return result
  }
}
