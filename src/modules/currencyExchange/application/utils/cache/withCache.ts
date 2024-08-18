import { Cache, CacheKey } from '.'

type WrappableFunction<TArgs extends any[], TResult> = (...args: TArgs) => TResult

export const withCache =
  <TArgs extends any[], TResult, TKey extends CacheKey>(
    func: WrappableFunction<TArgs, TResult>,
    cache: Cache<TKey, TResult>,
    findCacheKey: (...args: TArgs) => TKey,
  ): WrappableFunction<TArgs, TResult> =>
  (...args: TArgs): TResult => {
    const key = findCacheKey(...args)
    let value = cache.get(key)

    if (value === null) {
      value = func(...args)
      cache.set(key, value)
    }

    return value
  }
