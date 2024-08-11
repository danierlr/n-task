import { Module } from '@nestjs/common'
import { CurrencyExchangeController } from './currencyExchangeController'

@Module({
  imports: [],
  controllers: [CurrencyExchangeController],
  providers: [],
})
export class CurrencyExchangeModule {}
