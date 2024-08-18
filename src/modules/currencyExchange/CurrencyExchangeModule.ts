import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CurrencyExchangeController } from './infrastructure/CurrencyExchangeController'
import { CurrencyExchangeService } from './application/services/CurrencyExchangeService'
import { ExchangesRateService } from './application/services/ExchangeRatesService'

@Module({
  imports: [],
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService, ConfigService, ExchangesRateService],
})
export class CurrencyExchangeModule {}
