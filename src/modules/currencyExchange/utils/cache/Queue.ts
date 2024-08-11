import { QueueNode, CacheKey } from '.'

export class Queue<T extends CacheKey> {
  constructor() {}

  private _head: QueueNode<T> | null = null
  private _tail: QueueNode<T> | null = null
  private _mapValueToNode: Map<T, QueueNode<T>> = new Map()

  public get size(): number {
    return this._mapValueToNode.size
  }

  public insertHead(value: T) {
    if (this._mapValueToNode.has(value)) {
      throw new Error(`value ${value} already exists in Queue`)
    }

    const newNode: QueueNode<T> = {
      towardsHead: null,
      towardsTail: null,
      value,
    }

    if (this._head) {
      this._head.towardsHead = newNode
      newNode.towardsTail = this._head
      this._head = newNode
    } else {
      this._head = newNode
      this._tail = newNode
    }

    this._mapValueToNode.set(value, newNode)
  }

  public delete(value: T) {
    const node = this._mapValueToNode.get(value)

    if (!node) {
      throw new Error(`value ${value} is not present in Queue`)
    }

    if (node.towardsHead) {
      node.towardsHead.towardsTail = node.towardsTail
    } else {
      this._head = node.towardsTail
    }

    if (node.towardsTail) {
      node.towardsTail.towardsHead = node.towardsHead
    } else {
      this._tail = node.towardsHead
    }

    this._mapValueToNode.delete(value)
  }

  public get tail(): T | null {
    return this._tail?.value ?? null
  }
}
