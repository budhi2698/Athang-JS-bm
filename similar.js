const prompt = require("prompt-sync")();

let count = 0;

console.log("Similar Words\n");

let word1 = prompt("Word1: ");
let word2 = prompt("Word2: ");
let a = 4;

for (let i = 0; i <= 4; i++) {

    if(word1[i] == word2[a] || word1[i] == word2[a-2] || word1[i] == word2[a-3] || word1[i] == word2[a-4]){

        count++;
    }
}
console.log("Similar words of word1 + word2: " +count);