const prompt = require("prompt-sync")();
let cal;

// let number = parseInt(prompt("Enter your number: "));
// let number1 = parseInt(prompt("Enter your number1: "));
// console.log(number + number1);
do {
  let num1, num2, add, sub, mul, div, calculator;

  console.log("CALCULATOR");
  calculator = prompt("Enter what calculation you want to do: ");
  num1 = parseInt(prompt("Enter 1st number: "));
  num2 = parseInt(prompt("Enter 2nd number: "));

  if (calculator == "add") {
    add = num1 + num2;
    console.log(add);
  } else if (calculator == "sub") {
    sub = num1 - num2;
    console.log(sub);
  } else if (calculator == "mul") {
    mul = num1 * num2;
    console.log(mul);
  } else if (calculator == "div") {
    div = num1 / num2;
    console.log(div);
  } else {
    console.log("wrong value");
  }
  cal = prompt("You want to use these service again? yes/no?");
} while (cal == "yes" || cal == "Yes");
