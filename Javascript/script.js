// document.querySelector(".heading").textContent = "Hello world!";

// document.querySelector("#heading1").textContent = "Age: 34";

// console.log("Baodan Nguyen");

// literals : you cannot change its value..

// 34 
// 56
// 45.8
// 'Pthan'

// variables : you can change its value..

// let age = 34;
// console.log(age);

// naming conventions to name a variable: 

// let uLAURA = 34;
// console.log(uLAURA);

// let Ulaura = 34;
// console.log(Ulaura);

// camel case

// lowercase everywhere , we can start with a lowercase 
// let lauranguyen = 25;
// console.log(lauranguyen);

// uppercase everywhere , we can start with a uppercase
// let LAURANGUYEN = 25;
// console.log(LAURANGUYEN);

// number at the start is not allowed 
// let 9Pthan = 45;
// console.log(9pthan);

// number at the end works 
// let pthan34 = 45;
// console.log(pthan34);

// number in the middle works 
// let pth23an = 56;
// console.log(pth23an);

// underscores work everywhere 
// let _richard = 1;
// console.log(_richard);

// let richa_rd = 0;
// console.log(richa_rd);

// let richard_ = 89;
// console.log(richard_);

// const age = 23;
// console.log(age);

// age = 45;
// console.log(age);

// let age = 23;
// console.log(age);

// age = 45;
// console.log(age);

// var age = 23;
// console.log(age);

// age = 45;
// console.log(age);


// we dont use data types to declare a variable in javascript as like c++

// typeof is a keyword in javascript which is used to know the data type of a variable 

// let age = 34;
// console.log(typeof age);

// let age = 34.67;
// console.log(typeof age);

// let age;
// console.log(typeof age);

// let age = null;
// console.log(typeof age);

// you can just add a n at the end of a number to make it a bigint 
// let age = 32332434234234234432423n;
// console.log(typeof age);

// let name = 'r';
// console.log(typeof name);

// let isDone = false;
// console.log(typeof isDone);

// An operator is capable of manipulating a certain value or operand. 


// Assignment operators '='
let age = 34;
// age = 20 + 4;
// console.log(age);
// age += 4;
// age = age + 4;
// console.log(age);
// let a = 3;

// all the assignment operators expressions executes from right to left 

// age += 3;
// age = age + 3;
// console.log(age);

// ++ is a unary operator
// binary operator  = +, *, /, -, are binary operators because they need two operands to execute 
// unary operator = is implemented on a single operand 
// operand = numbers, strings, variables which are surrounding the operator 
// example: age = a + 3;
// Here , a and 3 are operands and + is an operator 

// age++; 
// age += 1;
// age = age + 1;

// age++2; = this is nothing, it will give error 
// age += 2;
// age = age + 2;

// age--;
// age -= 1;
// age = age - 1;

// age *= 2;
// console.log(age);

// age /= 2;
// console.log(age);

// Assignment operators : 
// =, +=, -=, *=, /= 

// age = 45 % 3; 

// if dividend < divisor then %(modulo) operator will give dividend as the answer 
// console.log(3 % 31);

// if dividend > divisor then %(modulo) operator will give remainder as the answer
// 27 , 0 

// let a = 3;
// Arithematic operators 
// console.log(3**3);
// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(a++);
// console.log(a--);

// you can decalre multiple variables in single line 
// let a = 4, b = 5, c = 6;
// console.log(a, b, c);


// using var, you can redeclare a variable in javascript and it will update the value of variable 
// using let, you cannot redecalre a variable in javascript 

// let x = 4;
// let x = 5;
// console.log(x);

// var x = 4;
// var x = 5;
// var x = 6;
// console.log(x);

// in var variable, you can give the value to the variable after or before the declaration 
// in let variable, you should give the value to the variable after the Declaration.

// x = 5000;
// let x;
// console.log(x);

// x = 5000;
// var x;
// console.log(x);

// conditional statements in javascript 
// age = 0;
// if (age > 18){
//     console.log("you can give vote");
// }
// else if(age < 18){
//     console.log("you cannot give vote");
// }
// else{
//     console.log("go and apply for voter id");
// }

// if (2 == 3){
//     console.log("equal");
// }
// else if(2 == 4){
//     console.log("not equal");
// }
// else{
//     console.log("dont know");
// }

if(2 == 3){
    console.log("equal");
}
if(2 == 4){
    console.log("not equal");
}
if(2 == 5){
    console.log("dont know");
}
if(false == true){
    console.log("not possible");
}
if(true){
    console.log("true");
}
else if(5 != 3){
    console.log("not equal 5 and 3");
}
else if(4 != 4){
    console.log("not equal 4 and 4");
}
else{
    console.log("Default value!!");
}