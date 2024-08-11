import { Cache, CacheKey } from '.'

export default class CacheLru<TKey extends CacheKey, TValue> implements Cache<TKey, TValue> {
  public constructor(
    public readonly maxCount: number,
    public readonly timeToLiveMs: number,
  ) {}

  public get(key: TKey): TValue | null {
    return null
  }

  set(key: TKey, value: TValue): void {}
}
