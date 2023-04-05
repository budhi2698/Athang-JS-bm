const prompt = require("prompt-sync")();
let ans;
let mainName, mainCode, mainSubject, mainMessage; //store value
function email() {
  do {
    console.log("\t\t\nEMAIL\n");

    let option = prompt("Send or Receive?");

    if (option == "send") {
      let name = prompt("Enter name: ");
      let code = parseInt(prompt("Enter code: "));
      let subject = prompt("Enter subject: ");
      let message = prompt("Enter message: ");

      if (message.length <= 20) {
        mainName = name;
        mainCode = code;
        mainSubject = subject;
        mainMessage = message;

        console.log("Send successfull!");
      } else {
        console.log("length of message is only 20");
      }
    }

    if (option == "receive") {
      let name = prompt("Name: ");
      let code = prompt("Code: ");

      if (name == mainName && mainCode == code) {
        console.log("Subject: " + mainSubject, "\nMessage: " + mainMessage);
      } else {
        console.log("Could not recive message!");
      }
    } else {
      console.log("\nPlease select send or recive!\n");
    }
    ans = prompt("You want to use these service again? yes/no?");
  } while (ans == "yes");
}
email();
