import Decimal from 'decimal.js'

export interface ExchangerateResponseDto {
  base: string
  rates: Record<string, Decimal>
  // unnecessary fields are ommitted
}
