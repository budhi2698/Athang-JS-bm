const prompt = require("prompt-sync")();

let details = prompt("Task: ");

switch (details) {
  case "wake up":
    console.log("7am");
    break;
  case "breakfast":
    console.log("8am");
    break;
  case "lunch":
    console.log("1pm");
    break;
  case "dinner":
    console.log("8pm");
    break;
  default:
    console.log("Invalid input");
}
