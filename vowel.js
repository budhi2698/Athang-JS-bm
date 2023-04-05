const prompt = require("prompt-sync")();

console.log("Checking Vowels\n");

let count = 0;
let count2 = -1;

let word = prompt("Enter any word: ");

for (let i = 0; i <= word.length; i++) {

  if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
    count++;
  }else if (count2[i] != "a" || count2[i] != "e" || count2[i] != "i" || count2[i] != "o" || count2[i] != "u"){
    count2++;
  }
}
console.log("Consonate: " +count2);
console.log("Total vowels: "+count);