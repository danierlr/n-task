import Decimal from 'decimal.js'

export interface QuoteResponse {
  exchangeRate: Decimal
  quoteAmount: Decimal
}
