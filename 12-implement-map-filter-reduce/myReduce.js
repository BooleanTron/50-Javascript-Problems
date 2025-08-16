const egArray = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback) {
  let temp = 0;
  for (let i of this) {
    temp = callback(temp, i);
  }
  return temp;
}

const add = (a, b) => a + b;

console.log(egArray.myReduce(add));