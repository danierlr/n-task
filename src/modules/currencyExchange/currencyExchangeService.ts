import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { QuoteRequest } from './models/QuoteRequest'
import { QuoteResponse } from './models/QuoteResponse'
import { withCache, CacheLru, Cache } from './utils/cache'
import { exchangerateApi } from './apis/exchangerate/exchangerateApi'

@Injectable()
export class CurrencyExchangeService {
  constructor(private configService: ConfigService) {}
  // private _cache: Cache = new CacheLru(100, 0)

  getQuery(): string {
    return 'get_query' + this.configService.get<string>('NFOO')
  }
}
