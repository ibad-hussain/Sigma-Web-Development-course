// console.log(document.getElementsByClassName("box"));
let boxes = document.getElementsByClassName("box");
boxes[2].style.backgroundColor = "yellow";
document.getElementById("redbox").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "green"
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})
document.getElementsByTagName("div")

/*

fff
ff
hjgj
*/

console.log(document.body.childNodes[1].contains(document.body.childNodes[1].childNodes[50]))