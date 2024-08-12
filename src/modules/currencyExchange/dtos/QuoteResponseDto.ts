import Decimal from 'decimal.js'

export interface QuoteResponseDto {
  exchangeRate: Decimal
  quoteAmount: Decimal
}
