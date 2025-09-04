// function sum(x, y, z) {
//     return x+y+z
// }
// let numbers = [1, 4, 6, 8];
// console.log(sum(...numbers))

// const arr = [1, 6, 11, 15]
// const obj = {...arr}
// console.log(obj)

// const parts = ["shoulders", "knees"];
// const lyrics = ["heads", ...parts, "and", "toes"]
// console.log(lyrics)

// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2)

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// arr1 = [...arr1, ...arr2]
// console.log(arr1)

let obj1 = {
    name : "ahmed",
    age : 10
}
let obj2 = {
    city : "karachi",
    salary : 20000
}
let mergeObj = {...obj1, ...obj2}
console.log(mergeObj)

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };
// const mergeObj = { x: 41, ...obj1, ...obj2, y: 9 }; // { x: 42, foo: "baz", y: 9 }
// console.log(mergeObj)
