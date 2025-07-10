function flatten(input) {
  const result = [];
  for (let element of input) {
    if (!Array.isArray(element)) {
      result.push(element);
    }
    else {
      result.push(...flatten(element));
    }
  }
  return result;
}


const test = [1, [2], [3, [4, 5]]];
console.log(flatten(test));