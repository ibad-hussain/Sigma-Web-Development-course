// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
    // resolve("successfully resolved");
    // reject("Some error occured, promise failed")
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data " + dataId);
//             resolve("successfully resolved");
//             if(getNextData) {
//                 getNextData();
//             };
//         }, 5000);
//     })
// };

// let finalVal = getData(3);
// finalVal
// finalVal



// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data " + dataId);
//             reject("Some error occured, promise failed");
//             if(getNextData) {
//                 getNextData();
//             };
//         }, 5000);
//     })
// };

// let finalVal = getData(3);
// finalVal
// finalVal



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("successfully resolved");
//         reject("unsuccessfully rejected");
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// });
// promise.catch((err) => {
//     console.log("promise unfulfilled", err)
// });



// function function1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 2000);
//     })
// }

// function function2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 2000);
//     })
// }

// console.log("fetching data 1");
// let p1 = function1();
// p1.then((res) => {
//     console.log("fetching data 2");
//     let p2 = function2();
//     p2.then((res) => {})
// })

// console.log("fetching data 1");
// function1().then((res) => {
//     console.log("fetching data 2");
//     function2().then((res) => {})
// })



// PROMISE CHAINING
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data " + dataId);
//             resolve("success");
//             // reject("Some error occured, promise failed");
//         }, 2000);
//     })
// };

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })