const prompt = require("prompt-sync")();
let ans;
let users = [];
let Mainpasswords = [];

do {
  let register = prompt("Enter:login or signup?");
  
  if (register == "signup")
   {
    let name = prompt("Name: ");
    let passwords = prompt("enter password: ");
    let confirmpassword = prompt("Enter confirm password: ");

    if (passwords == confirmpassword)
     {
      users.push(name);
      Mainpasswords.push(passwords);
      console.log("Sign up successfull!");
    } 
    else 
    {
      console.log("password doesn't match");
    }
  }
   else if (register == "login") 
   {
    let name = prompt("Name: ");
    let passwords = parseInt(prompt("enter password: "));

    if (users.includes(name) && Mainpasswords.includes(passwords)) 
    {
      console.log("successfull!");
    } else 
    {
      console.log("invalid!!");
    }
  } 
  else 
  {
    console.log("Register failed");
  }
  ans = prompt("Do you want to use this service again? yes/no");
} while (ans == "yes");