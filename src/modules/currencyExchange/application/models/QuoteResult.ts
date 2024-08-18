import Decimal from 'decimal.js'

export interface QuoteResult {
  exchangeRate: Decimal
  quoteAmount: Decimal
}
