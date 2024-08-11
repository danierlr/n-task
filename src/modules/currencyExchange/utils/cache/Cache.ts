import { CacheKey } from '.'

export interface Cache<TKey extends CacheKey, TValue> {
  get(key: TKey): TValue | null
  set(key: TKey, value: TValue): void
}
