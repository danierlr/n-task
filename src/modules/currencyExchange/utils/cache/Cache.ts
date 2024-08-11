export default interface Cache<TKey extends string | number, TValue> {
  get(key: TKey): TValue | null
  set(key: TKey, value: TValue): void
}
