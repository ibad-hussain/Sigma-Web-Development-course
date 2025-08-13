console.log("JavaScript Strings");
// node script.js

let x = "ibrahim";
console.log(x)
console.log(x[2])


// String Methods
console.log(x.length);
console.log(x.toUpperCase());
console.log(x.toLowerCase());
console.log(x.slice(1, 6));
console.log(x.slice(2));
console.log(x.replace("ib", 77));
let y = "ibrahimib"
console.log(y.replace("ib", 77));       // replaces only first occurance
let z = "ahmed"
console.log(x.concat(z, "arsalan", "ali", "saad"));
let p = "  hello world!    "
console.log(p);
console.log(p.trim(" "));
console.log(x.charAt(4));
console.log(x.indexOf("i"));        // gives location of only first occurance
console.log(x.startsWith("ibr"));
console.log(x.endsWith("t"));


// Template Strings
let t1 = `Hello World!`;
console.log(t1);

let t2 = `He's often called "Johnny"`;
console.log(t2);

let t3 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(t3);

let fName = "Ibad"
let company = "Google"
console.log(`Welcome ${fName} to ${company}`)

let num1 = 4;
let num2 = 10;
console.log(`${(num1+num2)/2}`)