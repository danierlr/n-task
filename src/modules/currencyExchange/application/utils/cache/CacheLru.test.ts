import { CacheLru } from '.'

//
;(globalThis as any).Date = {
  now: jest.fn(() => {
    console.log('mock Date.now')
    return 100
  }),
}

const mockCurrentTime = (timeMs: number) => {
  ;(globalThis as any).Date.now.mockImplementation(() => timeMs)
}

describe('CacheLru instantiation tests', () => {
  it('should instantiate', () => {
    expect(() => {
      const cache = new CacheLru<string, string>(10)
    }).not.toThrow()

    expect(() => {
      const cache = new CacheLru<string, string>(10, 100)
    }).not.toThrow()
  })

  it('should throw when size less than 1', () => {
    expect(() => {
      const cache = new CacheLru<string, string>(0)
    }).toThrow()

    expect(() => {
      const cache = new CacheLru<string, string>(-2)
    }).toThrow()
  })

  it('should throw when ttl is negative', () => {
    expect(() => {
      const cache = new CacheLru<string, string>(1, -1)
    }).toThrow()
  })
})

describe('CacheLru tests', () => {
  beforeEach(() => {
    mockCurrentTime(100)
  })

  it('should return cached value', () => {
    const cache = new CacheLru<string, string>(5, 1000)

    cache.set('foo', 'bar')

    expect(cache.get('foo')).toBe('bar')
    expect(cache.get('foo')).toBe('bar')
    expect(cache.get('foo')).toBe('bar')
  })

  it('should return cached value before it becomes stale', () => {
    const cache = new CacheLru<string, string>(5, 1000)
    cache.set('foo', 'bar')

    mockCurrentTime(500)

    expect(cache.get('foo')).toBe('bar')
    expect(cache.get('foo')).toBe('bar')
    expect(cache.get('foo')).toBe('bar')
  })

  it('should not return stale value', () => {
    const cache = new CacheLru<string, string>(5, 1000)

    cache.set('foo', 'bar')
    mockCurrentTime(1500)

    expect(cache.get('foo')).toBe(null)
  })

  it('should return null for non existing element', () => {
    const cache = new CacheLru<string, string>(5, 1000)

    cache.set('foo', 'bar')

    expect(cache.get('bax')).toBe(null)
  })

  it('should return null for non existing element', () => {
    const cache = new CacheLru<string, string>(5, 1000)

    cache.set('foo', 'bar')

    expect(cache.get('bax')).toBe(null)
  })
})
