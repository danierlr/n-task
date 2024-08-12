import { Module } from '@nestjs/common'
import { CurrencyExchangeModule } from '../currencyExchange/CurrencyExchangeModule'
import { ConfigModule } from '../config/ConfigModule'
import { ServerStatusController } from './ServerStatusController'

@Module({
  imports: [CurrencyExchangeModule, ConfigModule],
  controllers: [ServerStatusController],
  providers: [],
})
export class RootModule {}
