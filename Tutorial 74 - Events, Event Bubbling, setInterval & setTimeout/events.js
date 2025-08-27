function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

function changeText(id) {
    id.innerHTML = "Ooops..."
}


// document.getElementsByClassName("child").onclick = () => {
//     alert("JavaScript event");
// }

// document.querySelector(".child").addEventListener("click", (e) => {
//     e.stopPropagation();
//     alert("child was clicked");
// });

// document.querySelector(".childContainer").addEventListener("click", (e) => {
//     e.stopPropagation();
//     alert("childContainer was clicked");
// });

// document.querySelector(".container").addEventListener("click", (e) => {
//     alert("container was clicked");