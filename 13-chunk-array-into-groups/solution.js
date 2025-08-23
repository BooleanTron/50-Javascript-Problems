function split(array, size) {
  if (array.length === 0) {
    return "invalid input";
  }
  else if (array.length <= size) {
    return "no spliting possible";
  }
  let NSubArrays;
  if (array.length % size === 0) {
    NSubArrays = array.length / size;
  }
  else {
    NSubArrays = Math.floor(array.length / size);
  }

  let returnArray = [];
  let temp = [];
  for (element of array) {
    temp.push(element);
    if (temp.length === size) {
      returnArray.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    returnArray.push(temp);
  }

  return returnArray;
}

const eg = [1, 2, 3, 4, 5];
console.log(split(eg, 2));