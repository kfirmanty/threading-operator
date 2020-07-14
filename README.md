# Threading Operator for JS
Small utility code to bring functionality of Clj/Cljs thread macros https://clojuredocs.org/clojure.core/-%3E to JS.
### Example usage
```
threadFirst(10, [(a, b) => a / b, 20]) // returns 0.5
threadLast(10, [(a, b) => a / b, 20]) // returns 2
threadLast(10, [(a, b) => a / b, 20], [(a, b) => a * b, 100]) // returns 200
threadFirst(10, [Math.pow, 2], Math.sqrt) // returns 10
```
