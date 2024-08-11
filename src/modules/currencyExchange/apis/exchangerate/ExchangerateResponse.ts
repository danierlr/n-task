import Decimal from 'decimal.js'

export interface ExchangerateResponse {
  base: string
  rates: Record<string, Decimal>
  // unnecessary fields are ommitted
}
