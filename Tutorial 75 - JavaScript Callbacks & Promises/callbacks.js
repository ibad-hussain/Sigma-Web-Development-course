function myDisplayer(x) {
    document.getElementById("demo").innerHTML = x;
}

function myFirst() {
    myDisplayer("First");
}

function mySecond() {
    myDisplayer("Second");
}

myFirst()
mySecond()



// function myDisplayer(x) {
//     document.getElementById("demo").innerHTML = x;
// }

// function myCaculator(num1, num2) {
//     let sum = num1+num2;
//     return sum;
// }

// let result = myCaculator(3, 5);
// myDisplayer(result);



// function myDisplayer(x) {
//     document.getElementById("demo").innerHTML = x;
// }

// function myCaculator(num1, num2) {
//     let sum = num1+num2;
//     myDisplayer(sum);
// }

// myCaculator(3,5);



function myDisplayer(x) {
    document.getElementById("demo").innerHTML = x;
}

function myCaculator(num1, num2, callbackArg) {
    let sum = num1+num2;
    callbackArg(sum);
}

myCaculator(3, 5, myDisplayer)



function mainFunc(x) {
    console.log("Performing operation");

    setTimeout(() => {
        x("Operation complete")
    }, 3000);
};

function callbackFunc(result) {
    console.log("Result: ", result);
};

mainFunc(callbackFunc);



// function calculator(a, b, callbackArg) {
//     callbackArg(a,b);
// };

// calculator(3, 5, (a, b)=> {
//     console.log(a+b);
// });



// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello, 3000)



// CALLBACK HELL
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data " + dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// };

// getData(1, ()=> {
//     console.log("Getting data 2 ...")
//     getData(2, ()=> {
//         console.log("Getting data 3 ...")
//         getData(3, ()=> {
//             console.log("Getting data 4 ...")
//             getData(4);
//         })
//     });
// })
