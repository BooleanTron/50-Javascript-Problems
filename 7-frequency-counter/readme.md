# 🔠 Problem 07: Frequency Counter (Letter Count)

### 📄 Objective

Write a JavaScript function that takes a **string** as input and returns an **object** representing the **frequency** of each character (letter) in the string.

This problem is great for understanding object manipulation and counting occurrences using loops or `.reduce()`.

---

### ✅ Requirements

- Input: A **string** (can include letters, numbers, symbols, spaces)
- Output: An **object** where each key is a character, and its value is the number of times it appears in the string

---

### 🧪 Examples

```js
charFrequency("hello");
// { h: 1, e: 1, l: 2, o: 1 }

charFrequency("aaa BBB ccc");
// { a: 3, ' ': 2, B: 3, c: 3 }

charFrequency("123!!");
// { '1': 1, '2': 1, '3': 1, '!': 2 }
