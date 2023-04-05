const prompt = require("prompt-sync")();
let ans;
let user1, user2, user3;
let count = 1;
let mainpassword1, mainpassword2, mainpassword3;

do {
  console.log("\nRegisteration For Three users only:\n");

  let option = prompt("Signup or Login?: \n");

  if (option == "signup") {
    let userName = prompt("Enter userName: ");
    let password1 = prompt("Enter password: ");
    let password2 = prompt("confirmpassword: ");

    if (password1 == password2 && count == 1) {
      user1 = userName;
      mainpassword1 = password1;
      count++;

      console.log("signUp successfull\n");
    } else if (password1 == password2 && count == 2) {
      user2 = userName;
      mainpassword2 = password1;
      count++;

      console.log("signUp successfull\n");
    } else if (password1 == password2 && count == 3) {
      user3 = userName;
      mainpassword3 = password1;

      console.log("signUp successfull\n");
    } else {
      console.log("Signup failed!");
    }
  } else if (option == "login") {
    let userName = prompt("Enter userName: ");
    let password1 = prompt("Enter password: ");

    if (
      (user1 == userName && password1 == mainpassword1) ||
      (user2 == userName && password1 == mainpassword2) ||
      (user3 == userName && password1 == mainpassword3)
    ) {
      console.log("login successfull");
    } else {
      console.log("Invalid userName");
    }
  } else {
    console.log("userName could not found");
  }
  ans = prompt("You want to use these service again? yes/no?: ");
} while (ans == "yes");
