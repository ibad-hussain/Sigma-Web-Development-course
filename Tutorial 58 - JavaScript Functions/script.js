console.log("JAVASCRIPT FUNCTIONS");

function nice(name) {
    console.log("Hey " + name + " is a good boy");
    console.log("Hey " + name + " is a good programmer");
    console.log("Hey " + name + " is a good engineer");
}
nice("ibad");
nice("ahmed");


function sum1(a, b) {
    console.log(a + b);
}
sum1(2, 4);
sum1(2, 8);


function sum2(a, b) {
    return a + b;
}
result1 = sum2(2, 4);
result2 = sum2(7, 2);
console.log("The sum of the given numbers is: " + result1);
console.log("The sum of the given numbers is: " + result2);


function sum3(a, b, c=3) {
    console.log(a + b + c);
}
sum3(5, 9);


function sum4(a, b, c=3) {
    console.log(a + b + c);
}
sum4(6);


const func1 = (x) => {
    console.log("I am an arrow function " + x)
}
func1(2)
func1(7)
func1(31)