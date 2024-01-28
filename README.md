# free-stack
Free stack provides a freeform stack / queue implemented as a Double Linked-List.
You can use it as:
- a stack
- a queue
- a free stack, which is both a stack and a queue. It goes both ways
- a set, that's fine too

- All operations are O(1), because the list has an internal hashmap for finding items by value.
- In case you're still worried about performance, it also uses an ObjectPool to optimize on allocations.
- Oh, and it's built on top of Bun, so you know it comes out fast and delicious!


![](https://jacklehamster.github.io/free-stack/icon.png)
## Install bun

https://bun.sh/

```bash
curl -fsSL https://bun.sh/install | bash
```

## Commands

- **start**: "bun run index.ts",
- **bundle**: "bun run bundler/bundler.ts",
- **list**: "bun run samples/list-scripts.tsx",
- **example**: "cd example && bun start && cd ..",
- **fileSample**: "bun run samples/file.tsx && cat samples/data/test.json",
- **httpSample**: "bun run samples/server.tsx"

## Run example

[https://jacklehamster.github.io/free-stack/example/](https://jacklehamster.github.io/free-stack/example/)

## Github Source

[https://github.com/jacklehamster/free-stack/](https://github.com/jacklehamster/free-stack/)
