function countLetters(input){
    let noVowels = 0;
    let noConsonents = 0;
    const vowels = "aeiou";
    const consonents = "bcdfghjklmnpqrstvwxyz";
    for(let i = 0; i < input.length; i++){
        if(vowels.includes(input[i])){
            noVowels++;
        }
        else if(consonents.includes(input[i])){
            noConsonents++;
        }
    }

    return {noVowels, noConsonents};
}

console.log(countLetters("vasu is the goat!"));