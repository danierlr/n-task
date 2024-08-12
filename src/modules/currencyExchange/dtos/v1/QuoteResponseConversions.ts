import Decimal from 'decimal.js'
import { QuoteResult } from '../../models/QuoteResult'
import { QuoteResponseDto } from './QuoteResponseDto'

export class QuoteResponseConversions {
  public static fromModel(quoteResult: QuoteResult): QuoteResponseDto {
    return {
      exchangeRate: quoteResult.exchangeRate.toDecimalPlaces(3, Decimal.rounding),
      quoteAmount: quoteResult.quoteAmount.toDecimalPlaces(0, Decimal.ROUND_FLOOR),
    }
  }
}
