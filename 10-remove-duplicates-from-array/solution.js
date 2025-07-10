function removeDuplicates(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return "invalid input";
  }

  const set1 = new Set();
  for (let element of input) {
    set1.add(element);
  }
  return Array.from(set1);
}

const test = ["a", "b", "a", "c", "b"];
console.log(removeDuplicates(test));