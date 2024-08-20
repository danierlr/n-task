import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Query,
  Body,
  ValidationPipe,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { CurrencyCode } from '../consts/CurrencyCode'
import { CurrencyExchangeService } from '../application/services/CurrencyExchangeService'
import { supportedCurrencyCodes } from '../consts/supportedCurrencies'
import { QuoteQueryDto } from './dtos/v1/QuoteQueryDto'
import { QuoteResponseDto } from './dtos/v1/QuoteResponseDto'
import Decimal from 'decimal.js'
import { QuoteResult } from '../application/models/QuoteResult'
import { QuoteResponseConversions } from './dtos/v1/QuoteResponseConversions'

@Controller('api/v1')
export class CurrencyExchangeController {
  constructor(private currencyExchangeService: CurrencyExchangeService) {}

  @Get('quote')
  async getQuote(@Query(new ValidationPipe()) query: QuoteQueryDto): Promise<QuoteResponseDto> {
    const baseCurrency = query.baseCurrency as CurrencyCode
    if (!supportedCurrencyCodes.has(baseCurrency)) {
      throw new BadRequestException(`base currency ${query.baseCurrency} is not supported`)
    }

    const quoteCurrency = query.quoteCurrency as CurrencyCode
    if (!supportedCurrencyCodes.has(quoteCurrency)) {
      throw new BadRequestException(`quote currency ${query.quoteCurrency} is not supported`)
    }

    let baseAmount: Decimal
    try {
      baseAmount = new Decimal(query.baseAmount)
    } catch (error) {
      throw new BadRequestException(`can not parse baseAmount`)
    }

    let quote: QuoteResult | null = null
    try {
      quote = await this.currencyExchangeService.getQuote({
        baseCurrency,
        quoteCurrency,
        baseAmount,
      })
    } catch (error) {
      throw new InternalServerErrorException(
        `error while attempting to get conversion details from ${baseCurrency} to ${quoteCurrency}`,
      )
    }

    if (!quote) {
      throw new BadRequestException(`can not convert from ${baseCurrency} to ${quoteCurrency}`)
    }

    return QuoteResponseConversions.fromModel(quote)
  }
}
