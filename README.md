# Toys
The ptoject contains three .js files 
*Grading.js  -grading of various grades.
*salary.js - calculations  to get net salary
*Speed.js -speed detector  of various speeds

## Project Description

 ## Student Grade Generator.
The projects takes in a user input of marks attained by student and returns the grade of the student.

executes data one  line at a time using 
const readline = require('readline');

Accepts optoions-takes in  input  and returns output
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

question to be asked ,which is the input by user using
input.question("Input Student mark: ",

creating a function
function (mark){ 

function returns an integer or NaN else promts to enter a valid number
    let marks = parseInt(mark, 10);
    if (isNaN(marks)){
        process.stdout.write("Enter a valid number\n");
        process.exit(1)
    }else{

 uses if,else if,else to return grades 
   
closes the input source, resetting it to the terminal using
    input.close();

## 2: Speed Detector
asks the user to enter the speed of the car and returns the output according to the speed entered and gives recomendation on demerit points and if you exceed the demirit point your licence is suspended.

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

//declaring variable demerit_points
        const demerit_points = ((speed_of_car - 70) / 5);

//function rounds up and returns the smaller integer greater than or equal to a given number.
        Math.ceil(demerit_points);
    
 //exits process
    process.exit(0);

//resetting the process to an end.
    input.close();

## 3: Net Salary Calculator 
the calculator calculates the  net salary of a person entered by  deducting all deductions according to the gross salary of the person.

Enter your Gross Salary? 345567
Gross pay Ksh:  345567

P.A.Y.E Ksh: 98453.2

NHIF deduction pay Ksh: 1700

NSSF deduction  Ksh: 200

Total deductions Ksh: 100353.2

Net Salary Ksh: 245213.8


it deducts paye,nhif,nssf and proceeds to give out all deductions .


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
function (gross_pay)

//declaring variables using let
    let paye;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let total_deductions;
    let net_salary;

//use of if else statements to calculate paye deductions
   

//calculations for total deductions and net salary
    total_deductions = nhif + paye + nssf;
    net_salary = gross_pay - total_deductions;

//concatination of the outputs
    console.log(`Gross pay Ksh: ${gross_pay}\n`);


  //resetting the process to an end
    input.close();


## Set Up instructions

To start using this project use the following commands:
- `git clone https://github.com/BONIFACE-DEV/Toys`


## AUTHOR
--[Boniface korir] https://github.com/BONIFACE-DEV

## License info
Copyright (c) 2022 korir boniface
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.