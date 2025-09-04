// IIFE
/*
(function () {
    .........
})();

(() => {
    .........
})();

(async () => {
    .........
})();
*/


// (function () {
//     let a = 5;
//     let b = 6;
//     let sum = a+b
//     console.log(sum)
// })();
// console.log(sum)

var result = (function () {
    let a = 5;
    let b = 6;
    return a+b
})();
console.log(result)
console.log(a)

// function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45);
//         }, 1000);
//     })
// }

// (async function () {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
// })();