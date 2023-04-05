const prompt = require("prompt-sync")();
function plan() {
  // plan function
  return "hello"; // return will pass the value
}

console.log(plan()); // parameter it will put outside value into function

// function plan(name, age) {

//     return "hello"+name+ '\nage: '+age ;
// }
// let name = "Budhi";
// let age = 24;
// console.log(plan(name, age));

function variables() {
  let a = 30;
  let b = 20;
  add(a, b);
  sub(a, b);
}
function add(a, b) {
  let sum = a + b;
  console.log(sum);
}
function sub(a, b) {
  let sub = a - b;
  console.log(sub);
}

variables();
