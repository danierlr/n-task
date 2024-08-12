import { Module } from '@nestjs/common'
import { RootController } from './rootController'
import { RootService } from './rootService'
import { CurrencyExchangeModule } from '../currencyExchange/currencyExchangeModule'
import { configModule } from '../config/configModule'

@Module({
  imports: [CurrencyExchangeModule, configModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
