export interface QueueNode<T> {
  towardsHead: QueueNode<T> | null
  towardsTail: QueueNode<T> | null
  value: T
}
