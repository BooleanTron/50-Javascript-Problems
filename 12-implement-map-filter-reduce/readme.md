# 🧠 Problem 12: Implement `map`, `filter`, and `reduce` Manually

### 📄 Objective

Recreate JavaScript's built-in `Array.prototype.map`, `filter`, and `reduce` methods manually to understand how they work under the hood.

By implementing these from scratch, you'll strengthen your core understanding of **array iteration**, **callback functions**, and **functional programming** in JavaScript.

---

### ✅ Requirements

1. Implement `myMap(callback)`:
   - Returns a new array with the result of calling `callback` on every element.

2. Implement `myFilter(callback)`:
   - Returns a new array containing only the elements where `callback` returns `true`.

3. Implement `myReduce(callback, initialValue)`:
   - Returns a single accumulated value by applying `callback` to each element, passing along the result.

---

### 🧪 Examples

```js
[1, 2, 3].myMap(x => x * 2);        // [2, 4, 6]
[1, 2, 3].myFilter(x => x > 1);     // [2, 3]
[1, 2, 3].myReduce((a, b) => a + b, 0); // 6
