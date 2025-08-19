function split(array, size) {
  if (array.length === 0) {
    return "invalid input";
  }
  elseif(array.length <= size){
    return "no spliting possible";
  }

  let NSubArrays;
  if (array.length % size === 0) {
    NSubArrays = array.length / size;
  }
  else {
    NSubArrays = Math.floor(array.length / size) + 1;
  }

}