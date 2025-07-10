function count(input) {
  if (input.length === 0) {
    return "you need to enter a non empty string!";
  }
  input = input.replace(/\s/g, '').toLowerCase();
  const charcount = {};
  for (let char of input) {
    if (char in charcount) {
      charcount[char] += 1;
    }
    else {
      charcount[char] = 1;
    }
  }
  return charcount;
}

const input = "hey i am vasu and i am awesome!";
const result = count(input);
console.log(result);