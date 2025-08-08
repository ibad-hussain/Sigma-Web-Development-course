console.log("This is tutorial 56");

let a = 20;
if(a==0) {
    console.log("Are you kidding?")
}
else if(a<10) {
    console.log("You are too small to drive")
}
else if(a<18) {
    console.log("You are just 1 year behind to drive")
}
else {
    console.log("You can drive")
}


// ===
let x = 3;
let y = "3";

console.log(x===y);


// ternary operator
a = 6;
b = 8;
c = (a>b) ? (a-b) : (b-a)

if(a>b) {
    let c = a-b;
}
else {
    let c = b-a;
}