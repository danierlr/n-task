import Decimal from 'decimal.js'
import { exchangerateConsts } from './exchangerateConsts'
import { ExchangerateResponseDto } from './ExchangerateResponseDto'

export const exchangerateApi = {
  getCurrencyExchangeRates: async (currencyCode: string): Promise<ExchangerateResponseDto> => {
    const url = `${exchangerateConsts.baseUrl}v4/latest/${currencyCode}`

    console.log('doing api', currencyCode)

    const response = await fetch(url, {
      method: 'GET',
    })

    const regexpCurrencyCode = new RegExp('^[A-Z]{3}$')
    const responseText = await response.text()

    const reviver = (key: any, value: any, context: { source?: string }) => {
      if (regexpCurrencyCode.test(key) && typeof value === 'number') {
        return new Decimal(context.source!) // need to use context.source, because value is already converted to js type
      } else {
        return value
      }
    }

    return JSON.parse(responseText, reviver as any) // reviver as any, because incorrect type definition - third parameter (context) is not accounted for in type definition
  },
}
