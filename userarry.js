const prompt = require("prompt-sync")();

let answer;
let user = [];

function users() {
  do {
    console.log("ADD user 1: ");
    console.log("REMOVE user 2: ");
    console.log("VIEW user 3: \n");

    let option = prompt("Enter number 1 - 3: ");

    if (option == 1) {
      user.push(prompt("Enter userName: "));

      console.log("successfully added!");
    } 
    
    else if (option == 2) {
      user.pop();

      console.log("Successfully remove!");
    } 
    
    else if (option == 3) {
      console.log("View details: " + user);
    }
    
    answer = prompt("Press enter to continue: ");
  } while (answer != "no");
}
users();
