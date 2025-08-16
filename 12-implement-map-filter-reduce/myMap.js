const egArray = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callback) {
  let returnArray = [];
  let temp;
  for (let i of this) {
    temp = callback(i);
    returnArray.push(temp);
  }
  return returnArray;
}

function double(x) {
  return x * 2;
}

const doubleArray = egArray.myMap(double);
console.log(doubleArray);