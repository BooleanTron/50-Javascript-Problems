function frequencyMap(input) {
  if (typeof input !== 'string') {
    return "invalid input to the 'frequencyMap()' function";
  }
  input = input.replace(/\s/g, '').toLowerCase();
  if (input.length < 1) {
    return "invalid input to the 'frequencyMap()' function";
  }

  const map = {};
  for (let char of input) {
    if (map[char]) {
      map[char] += 1;
    }
    else {
      map[char] = 1;
    }
  }
  return map;
}

function isEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
function anagramChecker(input1, input2) {
  if (typeof input1 !== 'string' || typeof input2 !== 'string' || input1.length < 1 || input2.length < 1) {
    return "invalid input to the anagramChecker() function";
  }
  input1 = input1.replace(/\s/g, '').toLowerCase();
  input2 = input2.replace(/\s/g, '').toLowerCase();
  if (input1.length < 1 || input2.length < 1) {
    return "invalid input to the anagramChecker() function"
  }
  else if (input1.length !== input2.length) {
    return false;
  }
  else if (!isEqual(frequencyMap(input1), frequencyMap(input2))) {
    return false;
  }

  return true;
}

console.log(`Are both Anagrams?: ${anagramChecker("Astronomer", "Moon starer")}`)

