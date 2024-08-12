import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CurrencyExchangeController } from './currencyExchangeController'

@Module({
  imports: [],
  controllers: [CurrencyExchangeController],
  providers: [],
})
export class CurrencyExchangeModule {}
