const prompt = require("prompt-sync")();

//  nested if means you can create if/else inside if statement
let a = 1;
let b = 2;
let c = 3;
let d = 4;

if (a<b) {
    console.log("Execute a");
    if (c>d) {
        console.log("Execute c");
    }else{
        console.log("Execute d");
    }
}else{
    console.log("Execute b");
}