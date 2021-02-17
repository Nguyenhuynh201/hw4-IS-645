const word = prompt("Enter a word: ")

function reverseWord(word) {
    return word.split("").reverse().join("");
}

backwardWord = reverseWord(word.toLowerCase())

let vowelCount = 0;

for (i = 0; i < word.length; i++) {
    const LowerWord = word.toLowerCase()
    if (
        LowerWord[i] === "a" || LowerWord[i] === "e" || LowerWord[i] === "i" || LowerWord[i] === "o" || LowerWord[i] === "u" || LowerWord[i] === "y"
    ) {
        vowelCount++;
    }
}

if ( backwardWord === word.toLowerCase()) {
    console.log(`${word} contains ${vowelCount} vowels and is a palindrome`)
}

if (backwardWord !== word.toLowerCase()) {
    console.log(`${word} contains ${vowelCount} vowels and is not a palindrome`)
}
