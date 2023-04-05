const prompt = require("prompt-sync")();


// function form(name, age, hobbies) {
//     console.log('\nResult\n');
//     console.log('Name: '+name);
//     console.log('Age: '+age);
//     console.log('Hobbies: '+hobbies);  
// }
// function desc(name, age, hobbies) {
//     console.log("\nHis name is: "+name, "He is now: "+age, "Years of age and he likes: "+hobbies);
    
// }
//     let name = prompt("Enter Name: ");
//     let age = prompt("Age: ");
//     let hobbies = prompt("hobbies: ");


// form(name,age,hobbies);
// desc(name, age, hobbies);


function form(name, age, hobbies) {
    console.log('\nResult\n');
    console.log('Name: '+name);
    console.log('Age: '+age);
    console.log('Hobbies: '+hobbies);  
}

function desc(name, age, hobbies) {

    let name = prompt("Enter Name: ");
    let age = prompt("Age: ");
    let hobbies = prompt("hobbies: ");
}

form(name,age,hobbies);