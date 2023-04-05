const prompt = require("prompt-sync")();

console.log("CALCULATOR");

console.log("Add: 1");
console.log("Sub: 2");
console.log("Div: 3");
console.log("Mul: 4\n");

let calculator = prompt("Enter what calculation you want to do: ");
function variables() {
  let a = parseInt(prompt("Enter First Number: "));
  let b = parseInt(prompt("Enter Second Number: "));

  if (calculator == 1) {
    add(a, b);
  } else if (calculator == 2) {
    sub(a, b);
  } else if (calculator == 3) {
    div(a, b);
  } else if (calculator == 4) {
    mul(a, b);
  } else {
    console.log("Select option");
  }
}
function add(a, b) {
  let sum = a + b;
  console.log("num1 + num2: " + sum);
}
function sub(a, b) {
  let sub = a - b;
  console.log("num1 - num2: " + sub);
}
function div(a, b) {
  let div = a / b;
  console.log("num1 / num2: " + div);
}
function mul(a, b) {
  let mul = a * b;
  console.log("num1 * num2: " + mul);
}

variables();
