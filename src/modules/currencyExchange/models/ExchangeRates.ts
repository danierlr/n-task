import Decimal from 'decimal.js'
import { CurrencyCode } from '../consts/CurrencyCode'

export interface ExchangeRates {
  baseCurrency: CurrencyCode
  quoteCurrencyRates: {
    [key in CurrencyCode]?: Decimal
  }
}
