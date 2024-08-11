export interface CacheEntry<TKey, TValue> {
  timeCreatedEpohMs: number
  key: TKey
  value: TValue
}
