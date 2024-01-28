import { DoubleLinkList } from "./DoubleLinkList";

describe("DoubleLinkList", () => {
  let doubleLinkList;

  beforeEach(() => {
    doubleLinkList = new DoubleLinkList("edge");
  });

  afterEach(() => {
    doubleLinkList.clear();
  });

  it("should push items to the top", () => {
    doubleLinkList.pushTop("item1");
    doubleLinkList.pushTop("item2");

    expect(doubleLinkList.popTop()).toBe("item2");
    expect(doubleLinkList.popTop()).toBe("item1");
  });

  it("should push items to the bottom", () => {
    doubleLinkList.pushBottom("item1");
    doubleLinkList.pushBottom("item2");

    expect(doubleLinkList.popBottom()).toBe("item2");
    expect(doubleLinkList.popBottom()).toBe("item1");
  });

  it("should move an item to the top", () => {
    doubleLinkList.pushBottom("item1");
    doubleLinkList.pushBottom("item2");

    doubleLinkList.moveToTop("item1");

    expect(doubleLinkList.popTop()).toBe("item1");
    expect(doubleLinkList.popBottom()).toBe("item2");
  });

  it("should move an item to the bottom", () => {
    doubleLinkList.pushTop("item1");
    doubleLinkList.pushTop("item2");

    doubleLinkList.moveToBottom("item1");

    expect(doubleLinkList.popBottom()).toBe("item1");
    expect(doubleLinkList.popTop()).toBe("item2");
  });

  it("should check if it contains an item", () => {
    doubleLinkList.pushTop("item1");

    expect(doubleLinkList.contains("item1")).toBe(true);
    expect(doubleLinkList.contains("item2")).toBe(false);
  });

  it("should return the correct size", () => {
    doubleLinkList.pushTop("item1");
    doubleLinkList.pushTop("item2");
    doubleLinkList.pushTop("item3");

    expect(doubleLinkList.size).toBe(3);
  });

  it("should clear all items", () => {
    doubleLinkList.pushTop("item1");
    doubleLinkList.pushTop("item2");

    doubleLinkList.clear();

    expect(doubleLinkList.size).toBe(0);
  });
});
