function isPalindrome(input) {
  const clean = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const len = clean.length;

  for (let i = 0; i < len / 2; i++) {
    if (clean[i] !== clean[len - 1 - i]) {
      return false;
    }
  }

  return true;
}
const result = isPalindrome("A man, a plan, a canal: Panama");
console.log(`Is this a Pallindrome : ${result}`);