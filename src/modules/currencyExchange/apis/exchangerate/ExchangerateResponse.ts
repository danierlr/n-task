export interface ExchangerateResponse {
  base: string
  rates: Record<string, number>
  // unnecessary fields are ommitted
}
