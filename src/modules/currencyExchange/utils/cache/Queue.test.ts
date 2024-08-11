import { Queue } from '.'

describe('Queue tests', () => {
  it('should instantiate the Queue', () => {
    expect(() => {
      const queue = new Queue()
    }).not.toThrow()
  })
})
