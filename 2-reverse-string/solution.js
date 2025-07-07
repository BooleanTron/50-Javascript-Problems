const sampleString = "vasu";

function reverseString(inputstr){
    const reversed = [];
    for (let i = inputstr.length - 1; i >= 0; i--){
        reversed.push(inputstr[i]);
    }
    return reversed;
}

console.log(reverseString(sampleString));