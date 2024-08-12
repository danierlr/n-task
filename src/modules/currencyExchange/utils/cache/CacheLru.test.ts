import jest from 'jest'
import { CacheLru } from '.'

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

// describe('CacheLru instantiation tests', () => {
//   const START_TIME
//   beforeAll(() => {
//     jest.spyOn
//   })

//   it('first added element should be tail', () => {
//     const queue = new Queue<string>()

//     queue.insertHead('aa')
//     queue.insertHead('bb')
//     queue.insertHead('cc')

//     expect(queue.tail).toBe('aa')
//   })
// })
