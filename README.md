# free-stack

[![npm version](https://badge.fury.io/js/free-stack.svg)](https://www.npmjs.com/package/free-stack)

![](https://jacklehamster.github.io/free-stack/icon.png)



Free stack provides a freeform stack / queue implemented as a Double Linked-List.


## You can use it as:
- a stack
- a queue
- a free stack, which is both a stack and a queue. It goes both ways
- a set, that's fine too
- you also have commands like moveToTop, moveToBottom. It's useful, trust me!

## Notes
- All operations are O(1), because the list has an internal hashmap for finding items by value.
- In case you're still worried about performance, it also uses an ObjectPool to optimize on allocations.
- Oh, and it's built on top of Bun, so you know it comes out fast and delicious!

# Use case

Free stack is used mainly as a priority queue for [bun-engine](https://github.com/jacklehamster/bun-engine). The first-in / first-out allows us to process a window of cells, and eliminate the old ones (so that we don't have to store too many cells in memory). But one particular use case is that we could encounter a cell that we're already handling. In that case, that cell is no longer "old", so we put it back in front of the queue.

# Usage

```typescript
const freeStack: FreeStack<string> = new DoubleLinkList("");

freeStack.pushTop("item1");
freeStack.pushBottom("bottom");
freeStack.moveToBottom("item2");
const item = freeStack.popBottom();
//  result => item = "item1";
//  ...

//  You can also use the more traditional structures, but if you really need a queue / stack, I suggest you just use an array. That's more efficient.

const stack = freeStack;
stack.pushTop("something");
const something = stack.popTop();  //  <= returns "something"
```

## Github Source

[https://github.com/jacklehamster/free-stack/](https://github.com/jacklehamster/free-stack/)
