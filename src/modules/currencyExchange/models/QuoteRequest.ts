import Decimal from 'decimal.js'
import { CurrencyCode } from '../consts/CurrencyCode'

export interface QuoteRequest {
  baseCurrency: CurrencyCode
  quoteCurrency: CurrencyCode
  baseAmount: Decimal
}
