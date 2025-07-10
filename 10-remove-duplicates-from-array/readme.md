# 🔁 Problem 10: Remove Duplicates from an Array

### 📄 Objective

Write a JavaScript function that takes an **array** as input and returns a **new array** containing only the **unique elements**, with all duplicates removed.

This challenge strengthens your understanding of how to handle arrays, sets, and object-based tracking for data deduplication.

---

### ✅ Requirements

- Input: An array (may include numbers, strings, or mixed types)
- Output: A new array with duplicates removed
- Order of first occurrence should be preserved

---

### 🧪 Examples

```js
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// [1, 2, 3, 4, 5]

removeDuplicates(["a", "b", "a", "c", "b"]);
// ["a", "b", "c"]

removeDuplicates([1, "1", 1]);
// [1, "1"]
