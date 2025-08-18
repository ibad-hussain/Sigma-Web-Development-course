// Exercise 11 - CALCULATE THE FACTORIAL
/* Problem Statement : Write a program to calculate the factorial of a number using
                       1) reduce
                       2) for loops
*/

// using reduce
let num1 = parseInt(prompt("Enter a number:"));
let arr = [];
for (let i = num1; i > 0 ; i--) {
    arr.push(i);
}
// console.log(arr);
const red = (a, b) => {
    return a*b;
}
console.log(arr.reduce(red));



// using for loops
let num2 = parseInt(prompt("Enter a number:"));
for (let i = (num2-1); i > 0 ; i--) {
    num2 = num2*i;
}
console.log(num2);