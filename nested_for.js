for(let i = 0; i<3; i++){ //i = 1;

   console.log('hi');

    for(let j = 0; j<3; j++){ // j = 1; it will print untill if condition becomes false and then will terminate
      
        console.log("hello");
    }

}

for(let i = 0; i<5; i++){ //i = 1;

    let a = ' ';
 
     for(let j = 0; j<5 - i; j++){ 
       
         a = a + " ";
     }
     
     for(let k = 0; k<= 8; k++){ 
       
        a = a+ "* "; //same as a+ = "* "; shortcut
     } 
     console.log(a);
 }
    
 
 