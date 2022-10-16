const randomWords = require('random-words');

const randomWordsList = randomWords(5);

for (const word of randomWordsList) {
    console.log(word);
}

console.log("Terminé de decir palabras aleatorias");