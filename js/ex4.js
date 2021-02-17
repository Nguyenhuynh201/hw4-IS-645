const words = []

let word = "";

word = prompt("Enter a word to add to the list (Enter stop to exist): ")
if (word.toLowerCase() === "stop") {
    console.log("No words to display, Stop was the first word entered")
}

while (word.toLowerCase() !== "stop" ) {
    word = prompt("Enter a word to add to the list (Enter stop to exist): ")
    if (word !== "stop" ) {
        words.push(word);

    }
}

console.log("You entered the following words: ")
for (let i = 0; i < words.length; i++) {
console.log(words[i]);
}

