import { Cache, CacheKey, Queue, CacheEntry } from '.'

const INFINITE_TTL_MS = 0

export class CacheLru<TKey extends CacheKey, TValue> implements Cache<TKey, TValue> {
  public constructor(
    public readonly maxSize: number,
    public readonly timeToLiveMs: number = INFINITE_TTL_MS,
  ) {
    if (maxSize < 1) {
      throw new Error('size should be greater than 0')
    }

    if (timeToLiveMs < 0) {
      throw new Error('timeToLiveMs can not be less than 0')
    }
  }

  private _queueTime: Queue<TKey> = new Queue()
  private _queueUsage: Queue<TKey> = new Queue()
  private _mapKeyToCacheEntry: Map<TKey, CacheEntry<TKey, TValue>> = new Map()

  private _deleteEntry(key: TKey) {
    this._mapKeyToCacheEntry.delete(key)
    this._queueTime.delete(key)
    this._queueUsage.delete(key)
  }

  public get(key: TKey): TValue | null {
    const cacheEntry = this._mapKeyToCacheEntry.get(key)

    if (!cacheEntry) {
      return null
    }

    const timeNow = Date.now()
    if (this.timeToLiveMs !== INFINITE_TTL_MS && timeNow > cacheEntry.timeCreatedEpohMs + this.timeToLiveMs) {
      this._deleteEntry(key)
      return null
    }

    this._queueUsage.delete(cacheEntry.key)
    this._queueUsage.insertHead(cacheEntry.key)

    return cacheEntry.value
  }

  private get _size() {
    return this._mapKeyToCacheEntry.size
  }

  set(key: TKey, value: TValue): void {
    if (this._size > 0) {
      let keyToDelete: TKey | null = null

      if (this._mapKeyToCacheEntry.has(key)) {
        keyToDelete = key
      }

      if (!keyToDelete && this.timeToLiveMs !== INFINITE_TTL_MS) {
        const oldestKey = this._queueTime.tail!
        const oldestEntry = this._mapKeyToCacheEntry.get(oldestKey)!

        const timeNow = Date.now()
        if (timeNow > oldestEntry.timeCreatedEpohMs + this.timeToLiveMs) {
          keyToDelete = oldestEntry.key
        }
      }

      if (!keyToDelete && this._size >= this.maxSize) {
        const oldestUsedKey = this._queueUsage.tail!
        keyToDelete = oldestUsedKey
      }

      if (keyToDelete) {
        this._deleteEntry(keyToDelete)
      }
    }

    const newEntry: CacheEntry<TKey, TValue> = {
      timeCreatedEpohMs: Date.now(),
      key,
      value,
    }

    this._mapKeyToCacheEntry.set(key, newEntry)
    this._queueTime.insertHead(key)
    this._queueUsage.insertHead(key)
  }
}
