import { Queue, UpsidedownQueue } from "./Queue";
import { Stack, UpsidedownStack } from "./Stack";

export interface FreeStack<T> extends Stack<T>, Queue<T>, UpsidedownQueue<T>, UpsidedownStack<T> {
  contains(value: T): boolean;
  moveToTop(value: T): boolean;
  moveToBottom(value: T): boolean;
  clear(): void;
}
