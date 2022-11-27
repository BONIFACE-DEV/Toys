//execution of data line by line
const readline = require('readline');

//Accepts optoions-takes in  input  and returns output
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
//input by user on the interface
input.question("What is the speed of the car: ", 

//creating a function that takes speed as a parameter
function (speed){ 
    
              //function returns an integer else if  NaN  promts to enter a valid number
    let speed_of_car = parseInt(speed, 10);
    if (isNaN(speed)){
        process.stdout.write("Speed must be a numerical value \n");
        process.exit(1)
    }else{

          //using if else statements
       if (speed_of_car < 70)
       {
        console.log("Ok!\n");
       } else{

           //declaring variable demerit_points
        const demerit_points = ((speed_of_car - 70) / 5);

          //function rounds up and returns the smaller integer greater than or equal to a given number.
        Math.ceil(demerit_points);
        console.log(` Demerit Points: ${demerit_points}\n`);
            if (demerit_points >= 12) {
         console.log(" Your License  is suspended.\n");                
            } else {
                //exits process
                process.exit(0);                
            }
       }
    }
      //resetting the process to an end.
    input.close();
});