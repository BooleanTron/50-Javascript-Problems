function findSecondMax(input) {
  if (input.length < 2) {
    return "this function can not be applied to this array";
  }
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let num of input) {
    if (num > max) {
      secondMax = max;
      max = num;
    }
    else if (num > secondMax && num !== max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity
    ? "No second largest number (all elements may be equal)"
    : secondMax;

}

const input = [10, 40, 30, 20];
console.log(findSecondMax(input));