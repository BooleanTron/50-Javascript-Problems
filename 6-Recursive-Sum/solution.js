function sumRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
}

const arr = [0, 4, 2, 5];
console.log(sumRecursive(arr));