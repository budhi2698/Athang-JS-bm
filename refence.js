const prompt = require('prompt-sync')();

let employees = [];

function displayEmployees() {
  console.log("\nEMPLOYEE MANAGEMENT SYSTEM\n");
  console.log("                    EMPLOYEE LIST\n");
  console.log("EMPLOYEE NAME             EMPLOYEE ID            DATE\n");

  for (let i = 0; i < employees.length; i++) {
    console.log(`${employees[i].name+('\t\t\t\t')}${employees[i].id+('\t\t\t')}${employees[i].date}`);
  }
  console.log("\n1. ADD EMPLOYEE\n2. REMOVE EMPLOYEE\n3. UPDATE EMPLOYEE\n");
}

function addEmployee(name, date) {
  let id = 'EM-' + (employees.length + 1);
  let employee = {
    id: id,
    name: name,
    date: date
  };
  employees.push(employee);
}

function removeEmployee(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employees.splice(i, 1);
      console.log(`Employee with ID ${id} has been removed.`);
      return;
    }
  }
  console.log(`Employee with ID ${id} not found.`);
}

function updateEmployee(id, name, date) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      employees[i].name = name;
      employees[i].date = date;
      console.log(`Employee with ID ${id} has been updated.`);
      return;
    }
  }
  console.log(`Employee with ID ${id} not found.`);
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  switch (input) {
    case '1':
      console.log("\n1. ADD EMPLOYEE\n");
      rl.question("Name: ", (name) => {
        rl.question("Date: ", (date) => {
          addEmployee(name, date);
          displayEmployees();
        });
      });
      break;
    case '2':
      console.log("\n2. REMOVE EMPLOYEE\n");
      rl.question("Enter Employee ID: ", (id) => {
        removeEmployee(id);
        displayEmployees();
      });
      break;
    case '3':
      console.log("\n3. UPDATE EMPLOYEE\n");
      rl.question("Enter Employee ID: ", (id) => {
        rl.question("Name: ", (name) => {
          rl.question("Date: ", (date) => {
            updateEmployee(id, name, date);
            displayEmployees();
          });
        });
      });
      break;
    default:
      console.log("Invalid input. Please try again.");
      displayEmployees();
  }
});

// Test the functions
addEmployee('namgay', '03/04/23');
addEmployee('sonam', '04/07/23');
displayEmployees();