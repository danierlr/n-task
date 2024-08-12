import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { CurrencyExchangeController } from './CurrencyExchangeController'
import { CurrencyExchangeService } from './CurrencyExchangeService'
import { ExchangesRateService } from './ExchangeRatesService'

@Module({
  imports: [],
  controllers: [CurrencyExchangeController],
  providers: [CurrencyExchangeService, ConfigService, ExchangesRateService],
})
export class CurrencyExchangeModule {}
