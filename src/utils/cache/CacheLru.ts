import Cache from './Cache'

class CacheLru<TKey extends string | number, TValue> implements Cache<TKey, TValue> {
  public constructor(
    public readonly maxCount: number,
    public readonly timeToLiveMs: number,
  ) {}

  public get(key: TKey): TValue | null {
    return null
  }

  set(key: TKey, value: TValue): void {}
}
