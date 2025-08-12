// Exercise 9 - FAULTY CALCULATOR
/* 
Problem Statement: Create a faulty calculator using Javascript
                      1. It takes 2 numbers from the user as input.
                      2. It should perform incorrect operations, as:
                            + ----> -
                            * ----> +
                            - ----> /
                            / ----> **
                      3. It should perform wrong operation only 10% of the time.
*/

// let random = math.random()
// if (random > 0.1) {

// }
let input1 = parseInt (prompt("Enter first number: "));
let input2 = parseInt (prompt("Enter second number: "));
let input3 = prompt("Enter the operation which you like to perform (+ , - , * , /): ");

let random = Math.random()
console.log(random)
if (random > 0.1) {
    if (input3 == "+") {
        let result1 = input1 - input2;
        console.log(result1)
    } else if (input3 == "-") {
        let result2 = input1 / input2;
        console.log(result2)
    } else if (input3 == "*") {
        let result3 = input1 + input2;
        console.log(result3)
    } else if (input3 == "/") {
        let result4 = input1 ** input2;
        console.log(result4)
    } else {
        console.log("Wrong operation entered!");
    }
} else {
    if (input3 == "+") {
        let result5 = input1 + input2;
        console.log(result5)
    } else if (input3 == "-") {
        let result6 = input1 - input2;
        console.log(result6)
    } else if (input3 == "*") {
        let result7 = input1 * input2;
        console.log(result7)
    } else if (input3 == "/") {
        let result8 = input1 / input2;
        console.log(result8)
    } else {
        console.log("Wrong operation entered!");
    }
}