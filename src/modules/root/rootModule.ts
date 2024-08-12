import { Module } from '@nestjs/common'
import { CurrencyExchangeModule } from '../currencyExchange/CurrencyExchangeModule'
import { ConfigModule } from '../config/ConfigModule'

@Module({
  imports: [CurrencyExchangeModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class RootModule {}
