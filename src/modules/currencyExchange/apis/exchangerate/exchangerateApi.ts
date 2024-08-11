import { exchangerateConsts } from './exchangerateConsts'

export const exchangerateApi = {
  getCurrencyExchangeRates: async (currencyCode: string) => {
    const url = `${exchangerateConsts.baseUrl}v4/latest/${currencyCode}`
  },
}
