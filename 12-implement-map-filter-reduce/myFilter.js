const egArray = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (callback) {
  let returnArray = [];
  for (let i of this) {
    if (callback(i)) {
      returnArray.push(i);
    }
  }
  return returnArray;
}

const isEven = (x) => ((x % 2) === 0) ? true : false;

console.log(egArray.myFilter(isEven));