const prompt = require("prompt-sync")(); // function only

// let a, b, results;

// a = parseInt(prompt("Enter 1st number: "));
// b = parseInt(prompt("Enter 1st number: "));

// function add() {
//   results = a + b;
//   console.log("1st number + 2nd number: " + results);
// }
// function sub() {
//   results = a - b;
//   console.log("1st number - 2nd number: " + results);
// }
// add();
// sub();


function calculate(a=3, b=1) { //Default variables
                               //local variables
                               //the value wont be returned
                               //will be replaced when assigned parameter

  let sum = a + b;
  return sum;   //will return the value of sum to
                //calculate function

  // console.log(sum);
  
}
console.log(calculate(8, 10)); //Assigning variables
                               //using parameter 