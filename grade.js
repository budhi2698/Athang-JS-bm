const prompt = require("prompt-sync")();
let an;
console.log("\nGrade A = 100-90");
console.log("Grade B = 89-60");
console.log("Grade C = 59-30");
console.log("Grade D = 29-10");
console.log("Grade E = 10-1");
console.log("Grade f = 0\n");
do {
  let grade = parseInt(prompt("Ender your grade: "));

  if (grade <= 100 && grade >= 90) {
    console.log("Grade A");
  } else if (grade <= 89 && grade >= 60) {
    console.log("\nGrade B");
  } else if (grade <= 59 && grade >= 30) {
    console.log("\nGrade C");
  } else if (grade <= 29 && grade >= 10) {
    console.log("\nGrade D");
  } else if (grade <= 10 && grade >= 1) {
    console.log("\nGrade E");
  } else if (grade <= 0) {
    console.log("\nGrade F");
  } else {
    console.log("Your grade number is between 1 - 100");
  }
  an = prompt("You want to use these service again? yes/no?");
} while (an == "yes");
