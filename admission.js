const prompt = require("prompt-sync")();
console.log("\nDrukjegang cs admission\n");

let grade = prompt("Ender your grade: ");

if (grade == 1) {
  console.log("\nGrade1 Detials\n");
  let name = prompt("name: ");
  let age = parseInt(prompt("age: "));
  const cid = parseInt(prompt("cid: "));
  let eng = parseInt(prompt("Eng marks: "));
  let dzo = parseInt(prompt("Dzo marks: "));
  let math = parseInt(prompt("Math marks: "));
  let fees = parseInt(prompt("fees: "));
  let percentage = (eng + dzo + math) / 3;

  if (percentage >= 60 && fees == 25000) {
    console.log("\nAdmission successful");
    console.log(
      "\nAdmission Detail\nName: " + name,
      "\nAge: " + age,
      "\nPercentage: " + percentage
    );
  } else {
    console.log("Your admission failed");
  }
} else if (grade == 2) {
  console.log("\nGrade2 Detials\n");
  let name = prompt("name: ");
  let age = parseInt(prompt("age: "));
  const cid = parseInt(prompt("cid: "));
  let eng = parseInt(prompt("Eng marks: "));
  let dzo = parseInt(prompt("Dzo marks: "));
  let math = parseInt(prompt("Math marks: "));
  let fees = parseInt(prompt("fees: "));
  let percentage = (eng + dzo + math) / 3;

  if (percentage >= 40 && fees == 30000) {
    console.log("\nAdmission successful");
    console.log(
      "\nAdmission Detail\n\nName: " + name,
      "\nAge: " + age,
      "\nPercentage: " + percentage
    );
  } else {
    console.log("Admission failed");
  }
} else if (grade == 3) {
  console.log("\nGrade3 Detials\n");
  let name = prompt("name: ");
  let age = parseInt(prompt("age: "));
  const cid = parseInt(prompt("cid: "));
  let eng = parseInt(prompt("Eng marks: "));
  let dzo = parseInt(prompt("Dzo marks: "));
  let math = parseInt(prompt("Math marks: "));
  let fees = parseInt(prompt("fees: "));
  let sci = parseInt(prompt("sci marks: "));
  let percentage = (eng + dzo + math + sci) / 4;

  if (percentage >= 50 && fees == 45000) {
    console.log("\nAdmission successful");
    console.log(
      "\nAdmission Detail\n\nName: " + name,
      "\nAge: " + age,
      "\nPercentage: " + percentage
    );
  } else {
    console.log("Admission failed");
  }
} else {
  console.log("Wrong Input!! \nEnter Grade from 1-3");
}

// = reassign == condition (check) === condition (whether is similar value string etc/ it will check types and values)
