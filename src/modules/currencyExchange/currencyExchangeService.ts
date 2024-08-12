import { Injectable } from '@nestjs/common'
import { QuoteRequest } from './models/QuoteRequest'
import { QuoteResponse } from './models/QuoteResponse'
import { withCache, CacheLru, Cache } from './utils/cache'
import { exchangerateApi } from './apis/exchangerate/exchangerateApi'

@Injectable()
export class RootService {
  // private _cache: Cache = new CacheLru(100, 0)

  getQuery(): string {
    return 'Hello World!'
  }
}
