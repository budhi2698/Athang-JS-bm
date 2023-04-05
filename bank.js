const prompt = require("prompt-sync")();
let answer;
do {
  console.log("\nBank of Bhutan\n");

  console.log("1. loan");
  console.log("2. deposit withdraw");
  console.log("3. Net profit\n");

  let bank = prompt("CHOOSE Number(between 1-3): ");
  let amount = 50000;

  if (bank == 1) {
    console.log("\nLoan details");
    let name = prompt("Enter Name:");
    let amount = parseInt(prompt("Enter Amount: "));
    console.log("Interest in year 15%");

    let duration = parseInt(prompt("Enter duration in year: "));
    let monthly = (amount * 0.15) / 12;
    let total = amount * 0.15 * duration;

    console.log(
      "\nHELLO! " + name,
      "\nthis is your result: ",
      "\nMonthly:" + monthly,
      "\nTotal:" + total
    );
  } else if (bank == 2) {
    let option = prompt("\nwithdraw or deposit!!\n");

    if (option == "withdraw") {
      let name = prompt("Enter Name: ");
      let withdraw = parseInt(prompt("Enter your withdraw amount: "));

      if (withdraw <= 50000) {
        let remainamount = 50000 - withdraw;
        console.log(
          "You had withdrawn the Amount: " + withdraw,
          "And your ramianing balance is: " + remainamount
        );
      } else {
        console.log(
          "Sorry!! Insufficient balance! your balance is only nu.50,000"
        );
      }
    } else if (option == "deposit") {
      let Deposit = parseInt(prompt("Enter your deposit amount: "));
      let Tdeposit = amount + Deposit;
      console.log(
        "\nYou had deposited the Amount: " + Deposit,
        "And your total Amount is: " + Tdeposit
      );
    } else {
      console.log(
        "You did not select Withdraw/Deposit amount, Please select and try again"
      );
    }
  } else if (bank == 3) {
    console.log("\nNet Profit");
    let name = prompt("Enter name: ");
    let TotalAmount = parseInt(prompt("Enter Total amount: "));
    let duration = parseInt(prompt("Enter duration: "));

    console.log("Interest you get 5%");

    let netProfit = TotalAmount * 0.5;
    let total = TotalAmount + netProfit;

    console.log(
      "\nHello! " + name,
      "this is your result: ",
      "\nProfit: " + netProfit,
      "\nTotal: " + total
    );
  } else {
    console.log("Invalid Number!! Your number must be between 1-3");
  }
  answer = prompt("You want to use these service again? yes/no?");
} while (answer == "yes" || answer == "Yes");
