import Decimal from 'decimal.js'
import { IsString, IsNotEmpty } from 'class-validator'

export class QuoteQueryDto {
  @IsNotEmpty()
  @IsString()
  baseCurrency: string

  @IsNotEmpty()
  @IsString()
  quoteCurrency: string

  @IsNotEmpty()
  @IsString()
  baseAmount: string
}
