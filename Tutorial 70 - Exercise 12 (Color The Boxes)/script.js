console.log("EXERCISE 12 - COLOR THE BOXES");

let boxes = document.querySelector(".container").children;
let a = Array.from(boxes);
a.forEach((e) => {
    let num1 = Math.random()*10
    let num2 = Math.random()*10
    if(num1<=2 && num2<=2) {
        e.style.backgroundColor = "green";
        e.style.color = "red";
    }
    else if(num1<=4 && num2<=4) {
        e.style.backgroundColor = "orange";
        e.style.color = "black";
    }
    else if(num1<=6 && num2<=6) {
        e.style.backgroundColor = "red";
        e.style.color = "white";
    }
    else if(num1<=8 && num2<=8) {
        e.style.backgroundColor = "gray";
        e.style.color = "purple";
    }
    else {
        e.style.backgroundColor = "blue";
        e.style.color = "aqua";
    }
})