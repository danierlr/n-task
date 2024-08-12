import Decimal from 'decimal.js'

export class QuoteResponseDto {
  exchangeRate: Decimal
  quoteAmount: Decimal
}
