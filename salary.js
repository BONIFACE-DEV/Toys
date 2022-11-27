//execution of data line by line
const readline = require('readline');

//Accepts optoions-takes in  input  and returns output
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

//input by user  (the gross salary)
input.question("Enter your Gross Salary\n", 

//function 
function (gross_pay){
    //declaring variables using let
    let paye;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let total_deductions;
    let net_salary;

    //use of if else statements to calculate paye deductions
    if (gross_pay < 24001){
        paye = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        paye = 2400;
        extra_taxable_pay = gross_pay - 24000
        paye = (extra_taxable_pay * 0.25) + paye;
    }else {
        paye = 4483;
        extra_taxable_pay = gross_pay - 32333;
        paye = (extra_taxable_pay * 0.30) + paye;       
    }

    //use of if else statements to calculate nhif deductions
    if (gross_pay < 6000){
        nhif = 150;
    }else if(gross_pay < 8000){
        nhif = 300;
    }else if(gross_pay < 12000){
        nhif = 400;
    }else if(gross_pay < 15000){
        nhif = 500;
    }else if(gross_pay < 20000){
        nhif = 600;
    }else if(gross_pay < 25000){
        nhif = 700;
    }else if(gross_pay < 30000){
        nhif = 850;
    }
    else if(gross_pay < 35000){
        nhif = 900;
    }
    else if(gross_pay < 35000){
        nhif = 900;
    }
    else if(gross_pay < 40000){
        nhif = 950;
    }
    else if(gross_pay < 45000){
        nhif = 1000;
    }
    else if(gross_pay < 50000){
        nhif = 1100;
    }
    else if(gross_pay < 60000){
        nhif = 1200;
    }
    else if(gross_pay < 70000){
        nhif = 1300;
    }
    else if(gross_pay < 80000){
        nhif = 1400;
    }
    else if(gross_pay < 90000){
        nhif = 1500;
    }
    else if (gross_pay < 100000){
        nhif = 1600;
    }
    else{
        nhif =1700;
    }
    

//calculations for total deductions and net salary
    total_deductions = nhif + paye + nssf;
    net_salary = gross_pay - total_deductions;

//concatination of the outputs
    console.log(`Gross pay Ksh: ${gross_pay}\n`);
    console.log(`P.A.Y.E Ksh: ${paye}\n`);
    console.log(`NHIF deduction Ksh: ${nhif}\n`);
    console.log(`NSSF deduction  Ksh: ${nssf}\n`);    
    console.log(`Total deductions Ksh: ${total_deductions}\n`);
    console.log(`Net Salary Ksh: ${net_salary}\n`);    


  //resetting the process to an end
    input.close();
});

