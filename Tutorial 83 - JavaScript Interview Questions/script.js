// JAVASCRIPT INTERVIEW QUESTIONS

// Q.1) The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["ibad", "ahmed", "ravindra", "arsalan khan", "jawwad ahmed", "nehal zia", "junaid zakir", "saad", "ibrahim", "daniyal", "moin uddin", "rehan", "umran malik"];

// let houses = [];

// for (const student of students) {
//     if(student.length < 6) {
//         houses.push("Gryffindor");
//     }
//     else if(student.length < 8) {
//         houses.push("Hufflepuff");
//     }
//     else if(student.length < 12) {
//         houses.push("Ravenclaw");
//     }
//     else {
//         houses.push("Slytherin");
//     }
// }

// console.log(houses);



// Q.2) The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// function doubleArray(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 || arr[i] !== arr[i - 1]) {
//             result.push(arr[i] * 2);  // Double the element and add to the result
//         } else {
//             result.push(arr[i]);  // Just add the element without doubling
//         }
//     }
//     return result;
// }

// let inputArray = [2, 4, 6, 9, 9, 12, 20, 30, 30, 40, 42, 48, 51, 51, 55, 60, 65, 65];
// let doubledArray = doubleArray(inputArray);
// console.log(doubledArray);



// Q.3) The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


// function mirrorString(x) {
//     let result = "";
//     for (let i=(x.length-1); i>=0; i--) {
//         result = result + x[i]
//     }
//     return result;
// }

// let inputString = "hello";
// let mirroredString = mirrorString(inputString);
// console.log(`original string = ${inputString}`);
// console.log(`reverse string = ${mirroredString}`);
// console.log(inputString.concat(mirroredString));



// Q.4) The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// function passwordValidator(password) {
//     let isLongEnough = password.length >= 8;
//     let hasUppercase = false;
//     let hasLowercase = false;
//     let hasDigit = false;

//     for (let i=0; i<password.length; i++) {
//         let asciiValue = password.charCodeAt(i);

//         if(asciiValue >= 65 && asciiValue <= 90) {
//             hasUppercase = true;
//         }
//         if(asciiValue >= 97 && asciiValue <= 122) {
//             hasLowercase = true;
//         }
//         if(asciiValue >= 48 && asciiValue <= 57) {
//             hasDigit = true;
//         }
//     }

//     if(!isLongEnough) {
//         console.log("At least 8 characters required");
//     }
//     if(!hasUppercase) {
//         console.log("At least one uppercase required");
//     }
//     if(!hasLowercase) {
//         console.log("At least one lowercase required");
//     }
//     if(!hasDigit) {
//         console.log("At least one digit required");
//     }

//     if(isLongEnough && hasUppercase && hasLowercase && hasDigit) {
//         console.log("Password is valid");
//     } else {
//         console.log("Password is invalid");
//     }
// }

// let password = prompt("Enter a password");
// passwordValidator(password);



// Q.5) The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// function sumAllNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0) {
//             break;
//         }
//         else {
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5, 6, -6, 7, 8, 10, 4, -5, -8];
// let sumArr = sumAllNumbers(arr);
// console.log("The sum of all numbers in an array: " + sumArr)



// Q.6) The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// let count = 0;

// function countVowels(str) {
//     let upperVowels = ["A", "E", "I", "O", "U"];
//     let lowerVowels = ["a", "e", "i", "o", "u"];

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < upperVowels.length; j++) {
//             if(str[i] == upperVowels[j]) {
//                 count = count + 1;
//             }
//         }

//         for (let k = 0; k < lowerVowels.length; k++) {
//             if(str[i] == lowerVowels[k]) {
//                 count = count + 1;
//             }
//         }
//     }
//     return count;
// }

// let str = "dhkhjdaKHHUgfhhtOhjhdgdgdiAAAAA";
// let newStr = countVowels(str);
// console.log("Total vowels are: " + count);



// Q.7) The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.



// Q.8) Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

// wrong code
// async function mappingFunc(arr) {
//     return new Promise((resolve, reject) => {
//         newArr = [];
//         setInterval(() => {
//             let mul;
//             for (let i = 0; i < arr.length; i++) {
//                 mul = arr[i]*2;
//                 newArr.push(mul);
                
//             }
//             resolve();
//         }, 500);
//         return newArr;
//     })
// }

// let arr = [1, 2, 3, 4, 5];
// let Arr = mappingFunc(arr);
// console.log(Arr);
