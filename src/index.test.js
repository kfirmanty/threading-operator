import { threadFirst, threadLast } from "./index";

test("tests passing just value", () => {
    expect(threadFirst(10)).toBe(10);
});

test("test proper arg insertion order", () => {
    expect(threadFirst(10, [(a, b) => a / b, 20])).toBe(0.5);
    expect(threadLast(10, [(a, b) => a / b, 20])).toBe(2);
    expect(threadLast(10, [(a, b) => a / b, 20], [(a, b) => a * b, 100])).toBe(
        200
    );
    expect(threadFirst(10, [Math.pow, 2], Math.sqrt)).toBe(10);
});
