import { Module } from '@nestjs/common'
import { RootController } from './rootController'
import { RootService } from './rootService'
import { CurrencyExchangeModule } from '../currencyExchange/currencyExchangeModule'

@Module({
  imports: [CurrencyExchangeModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
