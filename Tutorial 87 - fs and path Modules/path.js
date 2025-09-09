import path from "path";

console.log(path);

let myPath = "D:\\MY_COURSES\\Sigma Web Development - CWH\\Tutorial 87\\hello.txt";

console.log(path.extname(myPath));  // Method to find extension name of the file
console.log(path.dirname(myPath));  // Method to find folder name of the file
console.log(path.basename(myPath)); // Method to find filename of the file

// Method for joining paths
console.log(path.join("D:/MY_COURSES/Sigma Web Development - CWH", "Tutorial 87\\hello.txt"));