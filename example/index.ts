import { DoubleLinkList, Stack } from "free-stack";
import Bao from "baojs";
import serveStatic from "serve-static-bun";

const app = new Bao();

const stack: Stack<string> = new DoubleLinkList<string>("");
stack.pushTop("hello");
console.log(stack.popTop());

app.get("/*any", serveStatic("/", { middlewareMode: "bao" }));

const server = app.listen({ port: 3000 });
console.log(`Listening on http://localhost:${server.port}`);
