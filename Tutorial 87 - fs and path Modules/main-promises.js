import fs from "fs/promises";

fs.writeFile("hello.txt", "Hi");
console.log("File created");

let file = await fs.readFile("hello.txt");  // Used 'await' without async function
console.log(file.toString());