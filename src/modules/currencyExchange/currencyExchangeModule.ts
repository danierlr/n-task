import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CurrencyExchangeController } from './currencyExchangeController'
import { CurrencyExchangeService } from './currencyExchangeService'

@Module({
  imports: [],
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService, ConfigService],
})
export class CurrencyExchangeModule {}
