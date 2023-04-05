const prompt = require("prompt-sync")();

function email() {
  console.log("Email Confirm\n");

  let email1 = prompt("Enter email: ");
  let email2 = prompt("Confirm email: ");

  if (email1 == email2) {
    if (email1.includes("@gmail.com")) {
      console.log("Email successfull");
    } else {
      console.log("Wrong format! email should includes '@gmail.com'");
    }
  } else {
    console.log("Confirmation Failed");
  }
}
email();
