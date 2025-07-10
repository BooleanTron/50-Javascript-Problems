# 🪜 Problem 09: Flatten a Deeply Nested Array

### 📄 Objective

Write a JavaScript function that takes a **deeply nested array** and returns a **new array** that is completely flattened (i.e., all nested elements brought to the top level).

This problem helps build strong intuition around **recursion**, **array traversal**, and understanding **nested structures**.

---

### ✅ Requirements

- Input: A nested array of arbitrary depth
- Output: A new flat array with all values in order

---

### 🧪 Examples

```js
flatten([1, [2], [3, [4, 5]]]);
// [1, 2, 3, 4, 5]

flatten([[1], [[[2, 3]]], 4]);
// [1, 2, 3, 4]

flatten([]);
// []
