const prompt = require("prompt-sync")();

let EMPLOYEE_NAME = [];
let DATE = [];
let EMPLOYEE_ID = [];
let Em = [];
// let a = 1;
let answer;

function miniProject()
{
  do {
    console.log('\n EMPLOYEE MANAGEMENT SYSTEM    \t\n');
    console.log('  \t  EMPLOYEE LIST   \t\n');

    console.log('EMPLOYEE NAME: \tEMPLOYEE ID: \tDATE: \n');

    for (let i = 0; i < EMPLOYEE_NAME.length; i++) 
    {
      // id.push(a)
      //
      console.log(EMPLOYEE_NAME[i] +'\t\t'+Em[i] + EMPLOYEE_ID[i]  +'\t\t' + DATE[i]);
    }

    console.log('1.ADD EMPLOYEE \n2.REMOVE EMPLOYEE\n3.UPDATE EMPLOYEE\n');

    let opt = prompt('Enter number 1 - 3: ');

    if (opt == 1) 
    {
      console.log("\n3. Add  EMPLOYEE\n");
      
      const newId = EMPLOYEE_NAME.length + 1;

      EMPLOYEE_NAME.push(prompt('Enter name:  '));
      DATE.push(prompt('Enter Date:  '));
      Em.push('Em: ');
      EMPLOYEE_ID.push(newId); 
      // a.push(1); 
      console.log('\nEmployee added successfully. Press Enter to continue.');
    }

    else if(opt == 2)
    {
      console.log("\n3. DELETE  EMPLOYEE\n");

      let id = parseInt(prompt('Enter employee id: '))

      if (EMPLOYEE_ID.includes(id)) //includes() will check wether there is value or not; it will return true or false
      {  
        id = id - 1;  // id- = 1;

        EMPLOYEE_NAME[id] = " ";
        DATE[id] = " ";
        Em[id] = " ";
        EMPLOYEE_ID [id] = " ";
        id = 1000; // inorder to terminate the code or loop;

        console.log("Delete successfully!");
      }else{
        console.log("Invalid id");
      } 
    }

    else if (opt == 3) 
    {
       console.log("\n3. UPDATE EMPLOYEE\n");

       let edit = parseInt(prompt("Enter the ID of the data item you want to update:"));
    
      if (EMPLOYEE_ID.includes(edit)) 
      {
          let newName = prompt("Enter the new name:");
          let newDate = prompt("Enter the new date:");

          edit = edit - 1;

          EMPLOYEE_NAME[edit] = newName;
          DATE[edit] = newDate;
          id = 1000;

          console.log(`Employee with ID ${EMPLOYEE_ID} have been updated`);
      } 
      else {
        console.log(`Employee with ID ${EMPLOYEE_ID} not found`);
      }
    }
    else{
      console.log('Option is between 1 - 3 only!');
    }
    answer = prompt("Press enter to continue: ");
  }while(answer != 'no');
}
miniProject();