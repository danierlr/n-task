import { Queue } from '.'

describe('Queue size tracking', () => {
  it('should instantiate the queue', () => {
    expect(() => {
      const queue = new Queue<string>()
    }).not.toThrow()
  })

  it('empty queue should have 0 count', () => {
    const queue = new Queue<string>()
    expect(queue.size).toBe(0)
  })

  it('should have correct size, when adding elements', () => {
    const queue = new Queue<string>()

    queue.insertHead('aaa')
    expect(queue.size).toBe(1)

    queue.insertHead('bbbbb')
    expect(queue.size).toBe(2)

    queue.insertHead('gggg')
    queue.insertHead('u')
    queue.insertHead('tgtg')
    expect(queue.size).toBe(5)
  })

  it('should have correct size, when removing elements', () => {
    const queue = new Queue<string>()

    queue.insertHead('aaa')
    queue.insertHead('bbbbb')
    queue.insertHead('kk')

    queue.remove('bbbbb')
    expect(queue.size).toBe(2)

    queue.remove('aaa')
    queue.remove('kk')
    expect(queue.size).toBe(0)
  })
})

describe('Queue adding removing wrong elements', () => {
  it('should throw when adding already existing element', () => {
    expect(() => {
      const queue = new Queue<string>()
      queue.insertHead('abc')
      queue.insertHead('abc')
    }).toThrow()
  })

  it('should throw when removing non existing element', () => {
    expect(() => {
      const queue = new Queue<string>()
      queue.insertHead('abc')
      queue.remove('de')
    }).toThrow()
  })
})

describe('Queue elements tracking', () => {
  it('the only added element should be tail', () => {
    const queue = new Queue<string>()

    queue.insertHead('xyz')
    expect(queue.tail).toBe('xyz')
  })

  it('first added element should be tail', () => {
    const queue = new Queue<string>()

    queue.insertHead('aa')
    queue.insertHead('bb')
    queue.insertHead('cc')

    expect(queue.tail).toBe('aa')
  })

  it('oldest existing element should be tail', () => {
    const queue = new Queue<string>()

    queue.insertHead('aa')
    queue.insertHead('bb')
    queue.insertHead('cc')
    queue.remove('aa')

    expect(queue.tail).toBe('bb')
  })

  it('when no elements are present, tail should be null', () => {
    const queue = new Queue<string>()

    expect(queue.tail).toBe(null)

    queue.insertHead('aa')
    queue.insertHead('bb')
    queue.remove('aa')
    queue.remove('bb')

    expect(queue.tail).toBe(null)
  })
})
