export interface Stack<T> {
  pushTop(value: T): void;
  popTop(): T | undefined;
  get size(): number;
}

export interface UpsidedownStack<T> {
  pushBottom(value: T): void;
  popBottom(): T | undefined;
  get size(): number;
}
