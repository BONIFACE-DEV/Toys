//executes data one  line at a time
const readline = require('readline');

//Accepts optoions-takes in  input  and returns output
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

//question to be asked ,which is the input by user
input.question("Input Student mark: ",

//creating a function
function (mark){ 

        //function returns an integer or NaN else promts to enter a valid number
    let marks = parseInt(mark, 10);
    if (isNaN(marks)){
        process.stdout.write("Enter a valid number\n");
        process.exit(1)
    }else{

           //using if,else if,else to return grades 
        if (marks > 79) 
        {
            console.log("You Grade is  A\n");    
        }
         else if (marks > 60) 
        {
            console.log("You Grade is B\n");    
        } 
         else if(marks > 49) 
        {
            console.log("You Grade is C\n");
        }
         else if(marks > 40) 
        {
            console.log("You Grade is D\n");
        }
        else{
            process.stdout.write(" You Grade is E\n");
        }
    } 
     //closes the input source, resetting it to the terminal. 
    input.close();
});
