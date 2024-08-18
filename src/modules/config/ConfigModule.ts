import { ConfigModule as NestjsConfigModule } from '@nestjs/config'
import * as joi from 'joi'

export const ConfigModule = NestjsConfigModule.forRoot({
  envFilePath: ['.env', '.default.env'],
  validationSchema: joi.object({
    CURRENCY_RATES_CACHE_SIZE: joi.number().required(),
    CURRENCY_RATES_CACHE_TTL_MS: joi.number().required(),
    SERVER_PORT: joi.number().port().required(),
  }),
  validationOptions: {
    allowUnknown: true,
  },
  isGlobal: true,
  cache: true,
})
