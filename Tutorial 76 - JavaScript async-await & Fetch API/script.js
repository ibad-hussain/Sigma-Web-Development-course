const URL = "http://numbersapi.com/random/year";

let promise = fetch(URL);
console.log(promise);

// const getFacts = async () => {
//     console.log("getting data ....")
//     let response = await fetch(URL);
//     // console.log(response);   // JSON format
//     // console.log(response.status);   // JSON format
//     // console.log(response.text);   // JSON format
//     let data = response.json();
//     console.log(data.text);
// }

// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         });
// }